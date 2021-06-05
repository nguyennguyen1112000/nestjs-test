import { Injectable, Inject } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';
import { Student } from './student.entity';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: StudentRepository,
  ) {}

  async getStudent(filterStudentDto:FilterStudentDto): Promise<Student[]> {
    return this.studentRepository.getStudent(filterStudentDto);
  }
  create(createStudentDto: CreateStudentDto): Promise<Student> {
   return this.studentRepository.createStudent(createStudentDto);
}
}