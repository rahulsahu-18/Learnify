import express from 'express'
import { getProfile, login, logout, register, updateProfile } from '../controller/userController.js';
import isAuth from '../middleware/isAuth.js';
import upload from '../middleware/multer.js'

const userRouter = express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.get('/logout',logout);
userRouter.get('/profile',isAuth,getProfile);
userRouter.put('/profile/update',isAuth,upload.single("profilePhoto"),updateProfile);

export default userRouter;