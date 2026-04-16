import express from "express"
import isAuth from "../middleware/isAuth.js";
import upload from "../middleware/multer.js";
import fs from 'fs'
import { uploadMedia } from "../utils/cloudinary.js";

const mediaRouter = express.Router();

mediaRouter.post('/upload-video',isAuth,upload.single('file'),async (req,res) => {
    try {
      const result = await uploadMedia(req.file.path);
      fs.unlinkSync(req.file.path)
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

export default mediaRouter;