import { Connection, Repository } from 'typeorm';
import {StudentRepository} from './student.repository'

export const studentProviders = [
  {
    provide: 'STUDENT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getCustomRepository(StudentRepository),
    inject: ['DATABASE_CONNECTION'],
  },
];