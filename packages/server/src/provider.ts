import { DataSource } from 'apollo-datasource';

import { QueryUsersArgs, User } from './generated/graphql'
import userData from './data/users.json'

export class UsersProvider extends DataSource {
  public async getUsers(args: QueryUsersArgs) {
    return userData.users.slice(0, 50) as User[]
  }
}