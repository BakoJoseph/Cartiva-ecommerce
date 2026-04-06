const { Category } = require("../models/category.js");
const { Product } = require("../models/product.js");
const express = require('express');
const router = express.Router();
const pLimit = require('p-limit').default;
const cloudinary = require('cloudinary').v2;

router.get('/', async (req, res) => {
    const productList = await Product.find().select('category');

    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.json(productList);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id).select('category');

    if (!product) {
        res.status(500).json({ success: false, message: 'Product not found'})
    }

    res.status(200).json(product);
});


router.post(`/create`, async (req, res) => {

    try {

        const category = await Category.findById(req.body.category);

        if (!category) {
            return res.status(400).json({ success: false, message: 'Invalid Category' });
        }

        const limit = pLimit(2);

        const uploadPromises = req.body.images.map(image => limit(() => cloudinary.uploader.upload(image, { folder: 'products' })));

        const uploadedImages = await Promise.all(uploadPromises);

        const imagesURL = uploadedImages.map(image => image.secure_url);         

        const product = new Product({
            name: req.body.name,
            description: req.body.description,        
            images: imagesURL,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        });

        const createdProduct = await product.save();        

        res.status(200).json({ success: true, message: 'Product created successfully', product: createdProduct });

    } catch (error) {

        console.error('Error creating Product:', error);    

        return res.status(500).json({ success: false, message: error.message });
    }
    
});


router.delete('/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        return res.status(500).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, message: 'Product deleted successfully' });
});

router.put('/:id', async (req, res) => {
    try {

        const category = await Category.findById(req.body.category);

        if (!category) {
            return res.status(400).json({ success: false, message: 'Invalid Category' });
        }

        const limit = pLimit(2);

        const uploadPromises = req.body.images.map(image => limit(() => cloudinary.uploader.upload(image, { folder: 'products' })));

        const uploadedImages = await Promise.all(uploadPromises);

        const imagesURL = uploadedImages.map(image => image.secure_url);         

        const product = await Product.findByIdAndUpdate(
            req.params.id, 
            {
                name: req.body.name,
                description: req.body.description,
                images: imagesURL,
                brand: req.body.brand,
                price: req.body.price,
                category: req.body.category,
                countInStock: req.body.countInStock,
                rating: req.body.rating,
                numReviews: req.body.numReviews,
                isFeatured: req.body.isFeatured
            }, 
            { new: true }
        );

        const updatedProduct = await product.save();

        if (!updatedProduct) {
            return res.status(500).json({ success: false, message: 'Product cannot be updated' });
        }

        res.status(200).json({ success: true, message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error('Error updating Product:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;