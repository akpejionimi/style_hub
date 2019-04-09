const {Designer_Post} = require("../models/userModel");

exports.getAllPosts =  (req, res)=>{
    // GET ALL POSTS IN DATABASE
    Designer_Post.findAll()
        .then(posts => {
            console.log(posts);
            res.json(posts);
        })
        .catch(err => console.log(err))
}

exports.postNewWears = (req, res, next)=>{
    const {title, content, price} = req.body;

     // INSERT FILMS
     Designer_Post.create({
        title,
        content,
        price
    }).then((posts) => {
        res.json(posts);
        // console.log(posts);
    }).catch(err => console.log(err))
}

// exports.getUpdateMovies = (req, res)=> {
//     const movieId = req.params.id;
//     Designer_Post.findByPk(movieId)
//     .then(movies => {
//         movies.update(movies)
//         .then(()=> {
//             res.redirect("/newfilm")
//         })
//         .catch(err => console.log(err))
//     }).catch(err => console.log(err))


// }

// exports.getDeletedMovie = (req, res)=> {
//     const movieId = req.params.id;
//     Designer_Post.findByPk(movieId)
//     .then(movies => {
//         movies.destroy()
//         .then(()=>{
//             res.redirect("/films")
//         })
//         .catch(err => console.log(err))    
//     }).catch(err => console.log(err))
// }