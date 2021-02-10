import { action } from 'typesafe-actions'
import { PostsTypes } from './types'

export const getPosts = (payload: PostsTypes) => action(PostsTypes.GET_POST, payload)