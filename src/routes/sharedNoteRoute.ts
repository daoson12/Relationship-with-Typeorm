import { Router } from "express";
const router = Router();

import { createSharedNote, deleteSharedNote, getSharedNote, getSharedNotes, updateSharedNote } from "../controller/sharedNote.controller";

router.get("/sharedNotes", getSharedNotes);
router.get("/sharedNotes/:id", getSharedNote);
router.post("/createSharedNotes", createSharedNote);
router.put("/editSharedNotes/:id", updateSharedNote);
router.delete("/deleteSharedNotes/:id", deleteSharedNote);

export default router;