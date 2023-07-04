import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    userName: string;

    @Column({nullable:true})
    userUUID: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({nullable:true})
    role: string;
}