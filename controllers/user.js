const { User } = require("../models/userModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUser = (req, res, next) => {
    User.findAll()
        .then(users => {
            console.log(users)
            res.json(users);
        })

        .catch(err => res.json({ success: false }))
}


exports.postAddUser = (req, res, next) => {
    const { brandname, username, email, password, phoneNo, location } = req.body;
    let imageUrl = null;
	// req.file is availble because of multer.
	// remember req.body was available because of bodyParser
	// multer gives you access to files and data submitted from forms with
    // enctype="multipart/form-data"
    console.log(req.body);
	if (req.file) {
		imageUrl = req.file.path;
    }
    
    
    if (!brandname || !username || !email || !password || !phoneNo || !location) {
        res.status(400).json({ msg: "All Fields are required" })
    }
    // else if(password !== password2) {
    //     res.status(401).json({ msg: "Password doesnt't match"})
    // }
    else {
        let hashedPassword;
        User.findOne({
            where: {
                email,
                username,
                phoneNo
            }

        }).then(user => {
            if (user) {
                return res.status(400).json({ msg: "Cridentials already exists" })
            }
        }).catch(err => next(err))
        try {
            const salt = bcrypt.genSaltSync(10);
            hashedPassword = bcrypt.hashSync(password, salt);
        } catch (error) {
            throw error;
        }
        User.create({
            brandname,
            username,
            email,
            password: hashedPassword,
            imageUrl,
            phoneNo,
            location,
        }).then(user => {
            jwt.sign(
                { id: user.id },
                process.env.AUTH_SECRET_KEY,
                (err, token) => {
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            brandname: user.brandname,
                            username: user.username,
                            email: user.email,
                            imageUrl: user.imageUrl,
                            phone_no: user.phoneNo,
                            location: user.location
                        }
                    })
                });
        }).catch(err => res.status(500).json({ msg: "An error occured", error: err }))
    }
}

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.findByPk(userId)
        .then(user => {
            user.destroy()
                .then(() => {
                    res.json({ success: true })
                })
                .catch(err => res.json({ success: false }))
        })
        .catch(err => res.json({ success: false, message: "This User doesnt exists" }))
}
