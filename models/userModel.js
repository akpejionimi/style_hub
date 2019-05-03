const db = require("../config/database");
const Sequelize = require("sequelize");
// CREATE A TABLE
// DESIGNER PROFILE
class User extends Sequelize.Model{}
User.init({
    brandname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter a Name/Brandname'
            }
        }
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Please enter a username'
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Please enter an email'
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: true
    }, 
    phoneNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Please enter a phone number'
            }
        }
    },
    // photo: {
    //     type: Sequelize.STRING,
    //     // allowNull: false
     
    // },
    // social_Media: {
    //     type: Sequelize.STRING,
    // },
    location: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {sequelize : db,
});
// Designer's Post
class Designer_Post extends Sequelize.Model{}
Designer_Post.init({
    content: {
        type: Sequelize.STRING
    },
    images: {
        type: Sequelize.STRING,
        // allowNull: false
    }
}, {sequelize : db,
});

// CATEGORY POST
class Designer_Category extends Sequelize.Model{}
Designer_Category.init({
    CategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Type: {
        type: Sequelize.TEXT,
    }
}, {sequelize : db,
});

// COMMENT POST
class Comment extends Sequelize.Model{}
Comment.init({
    commentId: {
        type: Sequelize.INTEGER,
    },
    commentText: {
        type: Sequelize.TEXT,
    }
}, {sequelize : db,
});

// DESIGNER PHOTOS
class Designer_Photos extends Sequelize.Model{}
Designer_Photos.init({
    photoId: {
        type: Sequelize.INTEGER,
    },
    images: {
        type: Sequelize.BLOB,
    }
}, {sequelize : db,
});

// FOLLOWERS
class Followers extends Sequelize.Model{}
Followers.init({
    followersId: {
        type: Sequelize.STRING,
    }
}, {sequelize : db,
});

Designer_Category.hasOne(Designer_Post);
Comment.hasOne(Designer_Post);
User.hasOne(Followers);
Designer_Photos.hasOne(Designer_Post);
Designer_Post.belongsTo(Designer_Category);
Designer_Post.belongsTo(Designer_Photos);
Followers.belongsTo(User)



module.exports = {
    User,
    Comment,
    Designer_Post,
    Designer_Category,
    Designer_Photos,
    Followers
};