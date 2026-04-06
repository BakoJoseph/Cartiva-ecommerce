const { Category } = require("../models/category");
const express = require('express');
const router = express.Router();
const pLimit = require('p-limit').default;
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        res.status(500).json({ success: false })
    }

    res.status(200).send(category);
});

router.delete('/:id', async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);
    
    if (!category) {
        res.status(500).json({ success: false })
    }

    res.status(200).json({ success: true, message: 'Category deleted successfully' });
});

router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList) {
        res.status(500).json({ success: false })
    }
    res.send(categoryList);
});

router.post('/create', async (req, res) => {
    try {
        const limit = pLimit(2);

        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result.secure_url;
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);

        const category = new Category({
            name: req.body.name,
            images: uploadStatus,
            color: req.body.color
        });

        const Savedcategory = await category.save();

        res.status(200).json({ success: true, message: 'Category created successfully', category: Savedcategory });

    } catch (err) {
        console.log(err);

        res.status(500).json({ success: false, message: 'An error occurred while creating the category', error: err.message });
    }

});

router.put('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, 
            {
                name: req.body.name,
                images: uploadStatus,
                color: req.body.color
            }, 
            { new: true }
        );

        if (!category) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }

        res.status(200).json({ success: true, message: 'Category updated successfully', category });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'An error occurred while updating the category', error: err.message });
    }
});


module.exports = router;

