import express from "express"
import isAuth from "../middleware/isAuth.js";
import upload from "../middleware/multer.js";
import { uploadMedia } from "../utils/cloudinary";

const mediaRouter = express.Router();

mediaRouter.post('/upload-video',isAuth,upload.single('file'),async () => {
    try {
      const result = await uploadMedia('req.file.path');
       res.status(200).json({
            success:true,
            message:"File uploaded successfully.",
            data:result
        });
    } catch (error) {
         console.log(error);
        res.status(500).json({message:"Error uploading file"})
    }
})