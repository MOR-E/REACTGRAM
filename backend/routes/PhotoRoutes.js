const express = require('express')
const router = express.Router()

//controller
const {insertPhoto, 
    deletePhoto, 
    getAllPhotos, 
    getUserPhotos, 
    getPhotoById,
    updatePhoto,
    likephoto,
    commentPhoto,
    searchPhotos} = require('../controllers/PhotoController')

//Middlewares
const {photoInsertValidation, photoUpdateValidation, commentValidation} = require('../middlewares/photoValidation')
const authGuard = require('../middlewares/authGuard')
const validate = require('../middlewares/handleValidation')
const {imageUpload} = require('../middlewares/imageUpload')

//Routes
router.post('/', authGuard, imageUpload.single('image'), photoInsertValidation(), validate, insertPhoto)
router.delete('/:id', authGuard, deletePhoto)
router.get('/', authGuard, getAllPhotos)
router.get('/user/:id', authGuard, getUserPhotos)
router.get('/search', authGuard, searchPhotos)
router.get('/:id', authGuard, getPhotoById)
router.put('/:id', authGuard, photoUpdateValidation(), validate, updatePhoto)
router.put('/like/:id', authGuard, likephoto)
router.put('/comment/:id', authGuard, commentValidation(), validate, commentPhoto)



module.exports = router