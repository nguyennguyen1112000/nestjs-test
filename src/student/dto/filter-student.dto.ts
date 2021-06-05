import {IsOptional} from 'class-validator'
export class FilterStudentDto{
    @IsOptional()
    search: string;
    @IsOptional()
    Age: number;
}