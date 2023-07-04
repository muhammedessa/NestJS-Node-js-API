import { IsNotEmpty, IsString } from "class-validator";
import { Role } from "../interface/Role";

export class ProfileDto {

    @IsNotEmpty()
    @IsString()
    readonly id:string;

    @IsNotEmpty()
    @IsString()
    readonly userUUID:string;


    @IsNotEmpty()
    @IsString()
    readonly userName: string;

    @IsNotEmpty()
    @IsString()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password:string;

    @IsNotEmpty()
    @IsString()
    readonly role: Role;

    
}