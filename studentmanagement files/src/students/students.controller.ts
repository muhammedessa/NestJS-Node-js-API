import { Body, Controller, Delete, Get, 
    HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto/update-student.dto';

@Controller('students')
export class StudentsController {

    constructor(private readonly studentService: StudentsService){}


    // @Get()
    // findAllStudents(){
    //     return 'All students information';
    // }

    // @Get()
    // findAllStudents(@Res() response){
    //     return response.status(200).send('All students information');
    // }

     @Get()
    findAllStudents(){
        return this.studentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
     // return `you id is ${id} ` ;
     return this.studentService.findOne(id)
    }

    @Post()
   // @HttpCode(HttpStatus.GONE)
    create(@Body() createStudentDTO: CreateStudentDto) {
      return  this.studentService.create(createStudentDTO);
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() updateStudentDTO: UpdateStudentDto) {
    //  return `This action updates a #${id} student`;
    return  this.studentService.update(id,updateStudentDTO);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
    //  return `This action removes a #${id} student`;
    return  this.studentService.remove(id);
    }


    // @Get()
    // findAll(@Query() query) {
    //   const { limit , offset } = query
    //   return ` all student (limit: ${limit} items) - (offset: ${offset} )`;
    // }
  

}
