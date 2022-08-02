const ContactModel = require('../model/contact.model')
const create = (req,res)=>{

    ContactModel.create({
        email: req.body.email,
        message: req.body.message
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
    ContactModel.find({},(err,result) =>{
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