
import{BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import { SharedNote } from "./SharedNote";
import { User } from "./User";


@Entity()
export class Note extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    text:String;

    @Column()
    ownerId:number
    @ManyToOne (()=>User, user => user.notes,{eager:true})
    @JoinColumn({name:"ownerId"})
    owner:User;

    @OneToMany(()=> SharedNote, sharedNote=> sharedNote.noteId)
    shares:SharedNote[];


}