import express from 'express'
import isAuth from '../middleware/isAuth.js';
import upload from "../middleware/multer.js";
import { createCourse, editCourse, getCourseById, getCreatorCourses, getPublishedCourse, togglePublishCourse } from '../controller/courseController.js';

const coursesRoute = express.Router();

coursesRoute.post('/',isAuth,createCourse);
coursesRoute.get('/creator-courses',isAuth,getCreatorCourses);
coursesRoute.put('/:courseId',isAuth,upload.single("courseThumbnail"),editCourse);
coursesRoute.get('/:courseId',isAuth,getCourseById);
coursesRoute.get('/published-courses',isAuth,getPublishedCourse);
coursesRoute.patch('/:courseId',isAuth,togglePublishCourse);

export default coursesRoute;
