import {Router} from "express"
const router = Router();


import{ createNote, deleteNote, getNote, getNotes, updateNote } from "../controller/note.controller";


router.get("/notes", getNotes);
router.get("/note/:id", getNote);
router.post("/newNote", createNote)
router.put("/editNote/:id", updateNote)
router.delete("/deleteNote/:id", deleteNote)
export default router;