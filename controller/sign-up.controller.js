const SignUpModel = require("../model/sign-up.model");
const ContactModel = require("../model/contact.model");


// Creating User
const create = (req,res,next) => {
  // Object Destructuring
  const { name, email, password, confirmpassword } = req.body;
  SignUpModel.create(
    {
      name,
      email,
      password,
      confirmpassword,
    },
    (err, result) => {
      if (err) next(err);
      else
        res.status(200).json({
          status: "Success",
          message: "User Added Successfully",
          data: result,
        });
    }
  );
};

const login = (req,res) => {
  SignUpModel.find({},(err,result) => {
      if(err){
          res.send({
              message: "Not able to Read users",
              error: err 
          })
      }
      res.send({
          message:'Successfully read users',
          data:result
      })
  })
}

const save = (req,res,next) => {
  // Object Destructuring
  const { name, email, message } = req.body;
    ContactModel.create(
      {
        name,
        email,
        message,
            },
      (err, result) => {
        if (err) next(err);
        else
          res.status(200).json({
            status: "Success",
            message: "User Added Successfully",
            data: result,
          });
      }
    );
};


module.exports = {create, login, save}