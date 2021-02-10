import { action } from 'typesafe-actions'
import { UserTypes, User } from './types'

export const getUser = (payload: User) => action(UserTypes.GET_USER, payload)