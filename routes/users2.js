const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://souradeep418saha:HGNIErfgHHnMt4r3@aiavengerdb.je1poyy.mongodb.net/?retryWrites=true&w=majority");
const userchema2 = mongoose.Schema({
    GalleryImg: {
      type: String,
      required: true
  }
  });
module.exports = mongoose.model("Galley",userchema2);