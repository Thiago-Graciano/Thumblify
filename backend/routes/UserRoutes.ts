import express from "express";
import { getUserThumbnails, getThumbnailById } from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/thumbnails", getUserThumbnails);
UserRouter.get("/thumbnails/:id", getThumbnailById);

export default UserRouter;