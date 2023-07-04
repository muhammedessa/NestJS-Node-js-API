import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";


@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column('json',{nullable:true})
    address: string[];

    @JoinTable()
    @ManyToMany(type=> Course, 
     course => course.students,{cascade:true}   
        )
        courses:Course[];
}