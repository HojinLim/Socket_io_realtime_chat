import express from "express";

import { getUsersForSidebar } from "../controllers/user.controller";
import protectRoute from "../middleware/protectRoute";


const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
