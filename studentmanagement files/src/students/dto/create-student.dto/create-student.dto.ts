import { IsNumber, IsString } from "class-validator";

export class CreateStudentDto {

   @IsString()
   readonly  name: string;

   @IsNumber()
   readonly age: number;

   @IsString({each: true})
   readonly address: string[];

   @IsString({each: true})
   readonly courses: string[];
}
