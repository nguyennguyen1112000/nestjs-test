import {EntityRepository, Repository} from "typeorm";
import { CreateStudentDto } from "./dto/create-student.dto";
import {Student} from "./student.entity";
import {FilterStudentDto} from './dto/filter-student.dto'

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
    async createStudent(createStudentDto:CreateStudentDto):Promise<Student>{
        const {LastName,FirstName,Age,Birthday} = createStudentDto;
        const student = this.create({
          LastName,
          FirstName,
          Age,
          Birthday
        })
        await this.save(student);
        return student;
    
    }
    async getStudent(filterStudentDto: FilterStudentDto): Promise<Student[]>{
        const query = this.createQueryBuilder('student');
        const {search,Age} = filterStudentDto;
        if(search){
            query.andWhere('student.LastName LIKE :search OR student.FirstName LIKE :search',{search:`%${search}%`});
        }
        if(Age){
            query.andWhere('student.Age = :Age',{Age:Age});
        }
        const students = query.getMany();
        return students;
    }
    
}