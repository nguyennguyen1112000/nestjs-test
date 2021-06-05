import {IsNotEmpty,IsNumber} from 'class-validator'
export class CreateStudentDto{
    LastName: string;
    @IsNotEmpty()
    FirstName: string;
    @IsNumber()
    Age: number;
    Birthday: Date;
}