import { Request, Response } from "express";
import Thumbnail from "../models/Thumbnail.js";

// Controlers to get All User Thumbnails
export const getUserThumbnails = async (req: Request, res: Response) => {
    try {
        const { userId } = req.session;

        const thumbnails = await Thumbnail.find({userId}).sort({createdAt: -1})
        res.json({thumbnails})

    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
} 

// Controlers to get single Thumbnails of a User
export const getThumbnailById = async (req: Request, res: Response) => {
    try {
        const { userId } = req.session;
        const { id } = req.params;

        const thumbnail = await Thumbnail.findOne({ _id: id });
        res.json({thumbnail});
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}