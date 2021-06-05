
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StudentController } from './student.controller';
import { studentProviders } from './student.providers';
import { StudentService} from './student.services';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...studentProviders,
    StudentService,
  ],
  controllers: [StudentController],
  exports:[DatabaseModule]
})
export class StudentModule {}
