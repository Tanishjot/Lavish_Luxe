const express=require("express")
const cors=require("cors")
const app=express()

app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message:"Welcome to ecommerce api - node",status:true})
})

const authRouters=require("./routes/auth.route.js")
app.use("/auth",authRouters)

const userRouters=require("./routes/user.route.js")
app.use("/api/users",userRouters)

const productRouter=require("./routes/product.routes.js");
app.use("/api/products",productRouter);

const adminProductRouter=require("./routes/adminProduct.routes.js");
app.use("/api/admin/products",adminProductRouter);

const cartRouter=require("./routes/cart.routes.js")
app.use("/api/cart", cartRouter);  //see cart,add item to cart

const cartItemRouter=require("./routes/cartItem.routes.js")
app.use("/api/cart_items",cartItemRouter);  //update and delete items in cart

const orderRouter=require("./routes/order.routes.js");
app.use("/api/orders",orderRouter);

const reviewRouter=require("./routes/review.routes.js");
app.use("/api/reviews",reviewRouter);

const ratingRouter=require("./routes/rating.routes.js");
app.use("/api/ratings",ratingRouter);

// admin routes handler
const adminOrderRoutes=require("./routes/adminOrder.routes.js");
app.use("/api/admin/orders",adminOrderRoutes);


module.exports=app;
