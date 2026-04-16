import express from 'express'
import isAuth from '../middleware/isAuth.js';
import upload from "../middleware/multer.js";
import { createCourse, createLecture, editCourse, editLecture, getCourseById, getCourseLecture, getCreatorCourses, getLectureById, getPublishedCourse, removeLecture, togglePublishCourse } from '../controller/courseController.js';

const coursesRoute = express.Router();

coursesRoute.post('/',isAuth,createCourse);
coursesRoute.get('/creator-courses',isAuth,getCreatorCourses);
coursesRoute.put('/:courseId',isAuth,upload.single("courseThumbnail"),editCourse);
coursesRoute.get('/published-courses',isAuth,getPublishedCourse);
coursesRoute.get('/:courseId',isAuth,getCourseById);
coursesRoute.patch('/:courseId',isAuth,togglePublishCourse);
coursesRoute.post('/:courseId/lecture',isAuth,createLecture);
coursesRoute.get('/:courseId/lecture',isAuth,getCourseLecture);
coursesRoute.post('/lecture/:courseId/:lectureId',isAuth,editLecture);
coursesRoute.delete('/lecture/:lectureId',isAuth,removeLecture);
coursesRoute.get('/lecture/:lectureId',isAuth,getLectureById);

export default coursesRoute;
