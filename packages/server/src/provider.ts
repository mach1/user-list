import { DataSource } from 'apollo-datasource';

import { QueryUsersArgs, User } from './generated/graphql'
import userData from './data/users.json'

export class UsersProvider extends DataSource {
  public async getUsers({ filter }: QueryUsersArgs) {
    return userData.users.filter(({ name, email }) => {
      const lowerCaseFilter = filter?.toLocaleLowerCase() || ''
      return name.toLocaleLowerCase().indexOf(lowerCaseFilter) !== -1 ||
        email.toLocaleLowerCase().indexOf(lowerCaseFilter) !== -1
    }).slice(0, 50) as User[]
  }
}