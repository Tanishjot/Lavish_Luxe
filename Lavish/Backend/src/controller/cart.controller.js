const express=require("express");
const router=express.Router();

const cartService=require("../services/cart.service.js");



const findUserCart = async (req, res) => {
    const user = req.user;
    try {
     
      const cart = await cartService.findUserCart(user._id);
      return res.status(200).send(cart);
    } catch (error) {
      // Handle error here and send appropriate response
     
      return res.status(500).send({  error: "error.message" });
    }
}
  

  const addItemToCart = async (req, res) => {
    const user = req.user;
    try {
      
      const cartItem=await cartService.addCartItem(user._id, req.body);
     
     return res.status(200).send(cartItem);
    } catch (error) {
      // Handle error here and send appropriate response
      return res.status(500).send({ error: error.message });
    }
  }

  module.exports={findUserCart,addItemToCart};