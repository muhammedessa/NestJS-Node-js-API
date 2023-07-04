import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Course } from './entities/course.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Student,Course])],
    controllers: [StudentsController],
    providers: [ StudentsService],
})
export class StudentsModule {}
