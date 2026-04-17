import { CourseProgress } from "../models/courseProgress.model.js";
import { Course } from "../models/courses.models.js";

export const getCourseProgress = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.id;

    const coureProgress = await CourseProgress.findOne({ userId, courseId });
    const courseDetails = await Course.findById(courseId).populate("lectures");

    if (!courseDetails) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    if (!coureProgress) {
      return res.status(200).json({
        data: {
          courseDetails,
          progress: [],
          completed: false,
        },
      });
    }

    return res.status(200).json({
      data: {
        courseDetails,
        progress: coureProgress.lectureProgress,
        completed: coureProgress.complited,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateLectureProgress = async (req, res) => {
  try {
    const { lectureId, courseId } = req.body;
    const userId = req.id;

    let courseProgress = await CourseProgress.findOne({ courseId, userId });
    if (!courseProgress) {
      courseProgress = new CourseProgress({
        courseId,
        userId,
        lectureProgress: [],
        complited: false,
      });
    }

    const lectureIndex = courseProgress.lectureProgress.findIndex(
      (lecture) => lecture.lectureId === lectureId,
    );

    if (lectureIndex !== -1) {
      courseProgress.lectureProgress[lectureIndex].viewed = true;
    } else {
      courseProgress.lectureProgress.push({ lectureId, viewed: true });
    }

    const lectureprogressLength = courseProgress.lectureProgress.filter(
      (lecture) => lecture.viewed,
    ).length;

    const course = await Course.findById(userId);
    if (course.lectures.length === lectureprogressLength) {
      courseProgress.complited = true;
    }
    await courseProgress.save();

    return res.status(200).json({
      message: "Lecture progress updated successfully.",
    });
  } catch (error) {
    console.log(error);
  }
};

export const markAsCompleted = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.id;

    const courseProgress = await CourseProgress.findOne({ courseId, userId });
    if (!courseProgress)
      return res.status(404).json({ message: "Course progress not found" });

    courseProgress.lectureProgress.map((lecture) => lecture.viewed = true);
    courseProgress.complited = true;
    await courseProgress.save();
    return res.status(200).json({ message: "Course marked as completed." });
  } catch (error) {
    console.log(error);
  }
};

export const markAsInCompleted = async (req,res) => {
    try {
      const { courseId } = req.params;
      const userId = req.id;
  
      const courseProgress = await CourseProgress.findOne({ courseId, userId });
      if (!courseProgress)
        return res.status(404).json({ message: "Course progress not found" });
  
      courseProgress.lectureProgress.map(
        (lectureProgress) => (lectureProgress.viewed = false)
      );
      courseProgress.completed = false;
      await courseProgress.save();
      return res.status(200).json({ message: "Course marked as incompleted." });
    } catch (error) {
      console.log(error);
    }
}