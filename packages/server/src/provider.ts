import { DataSource } from 'apollo-datasource';

import { QueryUsersArgs, User } from './generated/graphql'
import userData from './data/users.json'

const DEFAULT_PAGE_SIZE = 10
export class UsersProvider extends DataSource {
  public async getUsers(args: QueryUsersArgs) {
    const allUsers = userData.users
    const offset = args.offset || 0
    const limit = args.limit || DEFAULT_PAGE_SIZE
    const filter = args.filter || ''

    const filteredUsers = allUsers.filter(({ name, email }) => {
      const lowerCaseFilter = filter?.toLocaleLowerCase() || ''
      return name.toLocaleLowerCase().indexOf(lowerCaseFilter) !== -1 ||
        email.toLocaleLowerCase().indexOf(lowerCaseFilter) !== -1
    })
    
    const users = filteredUsers.slice(offset, offset + limit) as User[]

    return users
  }
}