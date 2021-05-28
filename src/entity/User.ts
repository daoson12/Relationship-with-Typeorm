import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { Note } from "./Note";
import { SharedNote } from "./SharedNote";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @OneToMany(()=> Note, note=> note.ownerId)
    notes:Note[];

    @OneToMany(()=> SharedNote, sharedNote=> sharedNote.targetId)
    notesSharedWithYou:Note[]
 
    @OneToMany(()=> SharedNote, sharedNote=> sharedNote.senderId)
    notesYouShared:Note[];


    
}
