// const mongoose = require('mongoose');

// const {Schema} = mongoose;

// const productSchema = new Schema ({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     description: {
//         type: String,
//     },
//     inStockQuantity: {
//         type: Number,
//         min: 0,
//         default: 1
//     },
//     category: {
//         type: Schema.Types.ObjectId,
//         ref: 'Category',
//         required: true
//     }
// })

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;