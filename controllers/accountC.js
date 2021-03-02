const User = require('../modules/userM');
const bcrypt = require('bcrypt');
//get log in page and function
exports.getLogin = ((req,res) => {
    res.render('login',{
        path:'/login'
    });
});
//post log in page function
exports.postLogin = ((req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({where:{email:email}})
        .then(user => {
            if(!user){
                console.log('user not found')
                return res.redirect('/failed');
            }else{
                bcrypt.compare(password,user.password)
                    .then(result => {
                        if(result){
                            console.log(result)
                            if(email == user.email){
                                console.log('user found')
                                res.redirect('/success');
                            }
                            res.redirect('/login');
                        }else{
                            res.redirect('/failed')
                        }
                    })
            }

        })
});
//get register page function
exports.getRegister = ((req,res) => {
    res.render('register',{
        path:'/register'
    });
});
//post log in page function
exports.postRegister = ((req,res) => {
    const name = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({where:{email:email}})
        .then(user => {
            console.log(user)
            if(!user) {
                bcrypt.hash(password,10)
                .then(hashedPass => {
                    console.log(hashedPass)
                    const newUser = User.build({
                        name:name,
                        email:email,
                        password:hashedPass,
                        repassword:hashedPass
                    })
                //     User.create({
                //         name:name,
                //         email:email,
                //         password:hashedPass,
                //         repassword:hashedPass
                // })
                newUser.save()
                .then((data) => {
                    console.log(data)
                    res.redirect('/login')
                })
                .catch(err => console.log(err));
            })
        }else{
            res.redirect('/register');
        }

    }).catch(err => console.log(err))
});

exports.getSuccess = (req,res) => {
    res.render('success',{
        path:'/success'
    })
}

exports.getFailed = (req,res) => {
    res.render('failed',{
        path:'/failed'
    })
}
