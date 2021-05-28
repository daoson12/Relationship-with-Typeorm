import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Note } from "./Note";
import { User } from "./User";

@Entity()
export class SharedNote extends BaseEntity{



    @PrimaryColumn()
    targetId:number;
    @ManyToOne(()=> User, user => user.notesSharedWithYou ,{eager:true})
    @JoinColumn({name:"targetId"})
    target:User;


    @PrimaryColumn()
    senderId:number;
    @ManyToOne(()=> User, user => user.notesYouShared,{eager:true})
    @JoinColumn({name:"senderId"})
    sender:User;

    @PrimaryColumn()
    noteId:number;
    @ManyToOne(()=>Note ,note=> note.shares,{eager:true})
    @JoinColumn({name:"noteId"})
    note:Note;

}