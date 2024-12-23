import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },

}, {
    timestamps: true // createdAt , updatedAt
});

const Product = mongoose.model('Product', productSchema);
// we can always put the singular and captilize version eg Product and not products as mongoose will do that 
export default Product;