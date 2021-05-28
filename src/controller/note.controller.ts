import { Request, Response } from "express";

import { getRepository } from "typeorm";
import { Note } from "../entity/Note";


export const getNotes = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const notes = await getRepository(Note).find();
  return res.json(notes);
};

export const getNote = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Note).findOne();
  if (results) {
    return res.json(results);
  }
  return res.json({ msg: "No record found with this id" });
};

export const createNote = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newNote = await getRepository(Note).create(req.body);
  const results = await getRepository(Note).save(newNote);
  return res.json(results);
};

export const updateNote = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const note = await getRepository(Note).findOne(req.params.id);
  if (note) {
    getRepository(Note).merge(note, req.body);
    const results = await getRepository(Note).save(note);
    return res.json(results);
  } else {
    return res.json({ msg: "No record found with this id" });
  }
};

export const deleteNote =async(
req:Request,
res:Response
): Promise <Response> =>{
    const results= await getRepository(Note).delete(req.params.id);
    return res.json(results);
}
