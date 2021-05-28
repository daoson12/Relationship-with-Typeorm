import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SharedNote } from "../entity/SharedNote";


export const getSharedNotes =async(
    req:Request,
    res:Response

):Promise<Response>=>{
    const sharedNotes =await getRepository(SharedNote).find();
    return res.json(sharedNotes);
};

export const getSharedNote = async(
    req:Request,
    res:Response
):Promise<Response>=>{
    const results = await getRepository(SharedNote).findOne();
    if (results) {
        return res.json(results)
    }else{
        return res.json({msg: 'No record found with this id'})
    }
}

export const createSharedNote=async (
    req:Request,
    res:Response
): Promise<Response>=>{
    const newSharedNote=await getRepository(SharedNote).create(req.body);
    const results=await getRepository (SharedNote).save(newSharedNote);
    return res.json(results);
}
export const updateSharedNote = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const sharedNote = await getRepository(SharedNote).findOne(req.params.id);
    if (sharedNote) {
      getRepository(SharedNote).merge(sharedNote, req.body);
      const results = await getRepository(SharedNote).save(sharedNote);
      return res.json(results);
    } else {
      return res.json({ msg: "No record found with this id" });
    }
  };

  export const deleteSharedNote =async(
  req:Request,
  res:Response
  ): Promise <Response> =>{
      const results= await getRepository(SharedNote).delete(req.params.id);
      return res.json(results);
  }


