
const ratingService = require('../services/rating.service.js');

const createRating = async (req, res) => {
  const user = req.user
//   const reqBody = req.body;
  
//   console.log(`product id ${reqBody.productId} - ${reqBody.rating}`);

  try {
    
    const rating =await ratingService.createRating(req.body, user);
        
    return res.status(201).send(rating);
  } catch (error) {
    // console.log("error --- ", error.message)
    return res.status(500).send({ error: error.message });
  }
};

const getAllRatings = async (req, res) => {
  const productId = req.params.productId;
  const user = req.user;
//   console.log("product id ",productId)
  try {
   
    const ratings =await ratingService.getAllRatings(productId);
    return res.status(201).send(ratings);
  } catch (error) {
    // console.log("error --- ", error.message)
    return res.status(500).send({ error: error.message });
  }
};
module.exports={createRating,getAllRatings};
