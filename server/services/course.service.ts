import { NextFunction, Response } from "express";
import CourseModel from "../models/course.model";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";

// create course
export const createCourse = CatchAsyncError(async (data:any, res:Response,next:NextFunction) => {
    try {
        const course = await CourseModel.create(data);
        res.status(201).json({
            success: true,
            course,
        });
    } catch(error:any){
        return next(new ErrorHandler(error.message,500));
    }
    }
);


// get all Courses
export const getAllCoursesService= async(res:Response) => {
    const courses =await CourseModel.find().sort({createdAt:-1});

    res.status(201).json({
        success:true,
        courses,
    });
};
