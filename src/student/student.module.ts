
import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { StudentController } from './student.controller';
import { studentProviders } from './student.providers';
import { StudentService} from './student.services';

@Module({
  imports: [DatabaseModule,AuthModule],
  providers: [
    ...studentProviders,
    StudentService,
  ],
  controllers: [StudentController],
  exports:[DatabaseModule]
})
export class StudentModule {}
