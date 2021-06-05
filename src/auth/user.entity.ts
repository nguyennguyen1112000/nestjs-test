
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import {Student} from '../student/student.entity'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
    id: number;
  @Column({unique:true})
  username: string;
  @Column()
  password: string;
  @OneToOne(type => Student,student => student.account)
  @JoinColumn()
  student: Student
}