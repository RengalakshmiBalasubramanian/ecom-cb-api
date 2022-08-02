const SignUpModel = require('../model/sign-up.model')
const create = (req,res)=>{

    SignUpModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    },(err,result)=>{
        if(err){
            res.send({
                message:"Not able to create the user",
                error: err
            })
        }
        res.send({
            message: "Created user",
            data: result
        })
    })

}

const read = (req,res) =>{
    SignUpModel.find({},(err,result) =>{
        if(err){
            res.send({
                message:"Not able to read the user",
                error: err
            })
        }
        res.send({
            message: "Read user",
            data: result
        })
    })
}


module.exports = {create,read}