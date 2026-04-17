import mongoose from "mongoose";

const lectureProgressSchema = new mongoose.Schema({
  lectureId: { type: String },
  viewed: { type: Boolean },
});

const courseProgressSchema = new mongoose.Schema({
    courseId:{type:String},
    userId:{type:String},
    complited:{type:Boolean},
    lectureProgress:[lectureProgressSchema]
})

export const CourseProgress = mongoose.model("Courseprogres",courseProgressSchema);