import { Connection, Repository } from 'typeorm';
import { UserRepository } from './user.repository';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getCustomRepository(UserRepository),
    inject: ['DATABASE_CONNECTION'],
  },
];