// here all the posts related routes are present

import express from 'express';
import { s3uploader } from '../../config/multerConfig.js';
import { createPost, deletePost, getAllPosts, updatePost } from '../../controllers/postController.js';
import { validate } from '../../validators/zodValidator.js';
import { zodPostSchema } from '../../validators/zodPostSchema.js';
import { isAdmin, isAuthenticated } from '../../middlewares/authMiddleware.js';

const router = express.Router(); // router object to modularize routes

/**
 * @swagger
 * /posts:
 *  post:
 *    summary: Create a new post
 *    description: Create a new post
 *    responses:
 *      200:
 *        message: Post created successfully
 */

router.post('/', isAuthenticated, s3uploader.single('image'), validate(zodPostSchema),  createPost);
router.get('/', getAllPosts);
router.delete('/:id', isAuthenticated, deletePost);
router.put('/:id', isAuthenticated, isAdmin, s3uploader.single('image'), updatePost);
export default router;