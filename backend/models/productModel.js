import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type:String, required:true},
    synopsis: {type:String, required:true},
    price: {type: Number, required:true},
    image: {type: Array, required:true},
    genre: {type: String, required:true},
    subCategory: {type: String, required:true},
    sizes: {type: Array, required:true},
    bestseller: {type:Boolean},
    date: {type:Number, required:true}
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema)

export default productModel