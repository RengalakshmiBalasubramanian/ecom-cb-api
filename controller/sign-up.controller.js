const SignUpModel = require("../model/sign-up.model");
const ContactModel = require("../model/contact.model");
const ShopDataModel = require("../model/shop.model");
const Products = require("../model/product.model");


const read = (req,res) =>{
  Products.find({},(err,result) =>{
      if(err){
          res.send({
              message:"Not able to read the data",
              error: err
          })
      }
      res.send({
          message: "Read sucessful",
          data: result
      })
  })
}


const create = (req, res, next) => {
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

const login = (req, res) => {
  SignUpModel.find({}, (err, result) => {
    if (err) {
      res.send({
        message: "Not able to Read users",
        error: err
      })
    }
    res.send({
      message: 'Successfully read users',
      data: result
    })
  })
}

const save = (req, res, next) => {
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

const createshop = (req, res, next) => {
  const { id, title, routeName, items } = req.body;
  ShopDataModel.create(
    {
      id,
      title,
      routeName,
      items,

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


const select = (req, res) => {
  ShopDataModel.find({}, (err, result) => {
    if (err) {
      res.send({
        message: "Not able to Read users",
        error: err
      })
    }
    res.send({
      message: 'Successfully read shops',
      data: result
    })
  })
}


module.exports = { read, create, login, save, createshop, select }