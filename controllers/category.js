const { Designer_Category } = require("../models/userModel");

exports.getCategories = (req, res, next) => {
    Designer_Category.findAll()
        .then(
            (categories) => {
                res.json(categories)
            })
        .catch(err => res.json({
            success: false
        }))
}

exports.postCategory = (req, res, next) => {
    const{CategoryId, Type} = req.body;
    Designer_Category.create({
        CategoryId,
        Type
    })
        .then((category => {
            res.json({
                category,
                success: true
            });
        }))
        .catch((err) => res.json({
            message: "something went wrong",
            Error: err
        }));

}