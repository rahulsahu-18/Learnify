import express from 'express';
import { getCourseProgress, markAsCompleted, markAsInCompleted, updateLectureProgress } from '../controller/courseProgressController.js';
import isAuth from '../middleware/isAuth.js';

const courseProgressRouter = express.Router();

courseProgressRouter.get('/:courseId',isAuth,getCourseProgress);
courseProgressRouter.post('/:courseId/lecture/:lectureId/view',isAuth,updateLectureProgress);
courseProgressRouter.post('/:courseId/complete',isAuth,markAsCompleted);
courseProgressRouter.post('/:courseId/incomplete',isAuth,markAsInCompleted);

export default courseProgressRouter;