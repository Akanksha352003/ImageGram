//after /users the remaining part of url is handled here

import express from 'express';
import { getProfile, signin, signup } from '../../controllers/userController.js';
import { zodSignupSchema } from '../../validators/zodSignipSchema.js';
import { validate } from '../../validators/zodValidator.js';
import { zodSigninSchema } from '../../validators/zodSigninSchema.js';
const router = express.Router();

router.get('/profile', getProfile);

/**
 * @swagger
 * /users/signup:
 *  post:
 *    summary: Signup a new user
 *    description: Signup a new user
 */
router.post('/signup', validate(zodSignupSchema), signup);

/**
 * @swagger
 * /users/signin:
 *  post:
 *    summary: Signin a registered user
 *    description: Signin a registered user
 */
router.post('/signin', validate(zodSigninSchema), signin);

export default router;