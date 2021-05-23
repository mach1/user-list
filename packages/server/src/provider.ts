import { DataSource } from 'apollo-datasource';

import { QueryUsersArgs, User } from './generated/graphql'
import userData from './data/users.json'
import { AddArgumentsAsVariables } from 'graphql-tools';

const DEFAULT_PAGE_SIZE = 10

const ROLES_BY_PRIORITY = [
  'ACCOUNT_MANAGER',
  'ADMIN',
  'AGENT',
  'EXTERNAL_REVIEWER'
]
export class UsersProvider extends DataSource {
  public async getUsers(args: QueryUsersArgs) {
    const allUsers = userData.users
    const offset = args.offset || 0
    const limit = args.limit || DEFAULT_PAGE_SIZE
    const filter = args.filter || ''
    const sortedBy = args.sortedBy || 'name'
    const sortOrder = args.sortOrder || 'desc'

    const filteredUsers = allUsers.filter(({ name, email }) => {
      const lowerCaseFilter = filter?.toLocaleLowerCase() || ''
      return name.toLocaleLowerCase().indexOf(lowerCaseFilter) !== -1 ||
        email.toLocaleLowerCase().indexOf(lowerCaseFilter) !== -1
    })

    filteredUsers.sort((user1, user2) => {
      if (sortedBy === 'name') {
        return sortOrder === 'asc' ? user1.name.localeCompare(user2.name) : user2.name.localeCompare(user1.name)
      } else {
        const role1Index = ROLES_BY_PRIORITY.findIndex(role => user1.role === role)
        const role2Index = ROLES_BY_PRIORITY.findIndex(role => user2.role === role)
        return sortOrder === 'asc' ? role2Index - role1Index : role1Index - role2Index 
      }
    })
    
    const users = filteredUsers.slice(offset, offset + limit) as User[]

    return users
  }
}