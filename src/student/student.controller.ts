import { Controller, Post, Get, Body, Param, Delete, Put, Patch, Query } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';
import { Student } from './student.entity';
import { StudentService } from './student.services';
@Controller('students')
export class StudentController {
    constructor(private studentService: StudentService) { }

    @Get()
    async findAll(@Query() filterStudentDto:FilterStudentDto): Promise<Student[]> {
        return this.studentService.getStudent(filterStudentDto);
    }
    @Post()
    async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
        return this.studentService.create(createStudentDto);
    }
}