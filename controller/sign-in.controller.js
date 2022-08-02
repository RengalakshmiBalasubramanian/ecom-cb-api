const SignInModel = require('../model/sign-in.model')
const create = (req,res)=>{

    SignInModel.create({
        email: req.body.email,
        password: req.body.password,
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
    SignInModel.find({},(err,result) =>{
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