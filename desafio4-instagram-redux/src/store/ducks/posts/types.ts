export enum PostsTypes {
    GET_POST = 'GET_POST',
    PATCH_POST = 'PATCH_POST'
}

export interface PostUser {
    id: number,
    user: string,
    userPicture: string,
    postPicture: string,
    location: string,
    description: string,
    likes: number
}