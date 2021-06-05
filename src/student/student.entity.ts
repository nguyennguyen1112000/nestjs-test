
import { User } from 'src/auth/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  Studentid: number;

  @Column()
  LastName: string;

  @Column()
  FirstName: string;

  @Column()
  Age: number;

  @Column()
  Birthday: Date;
  @OneToOne(type => User, user => user.student)
  @JoinColumn()
  account: User


}