import { PostsTypes, PostUser } from "./types";

const initialStatePosts: PostUser[] = []

function reducerPosts(state = initialStatePosts, action: any) {
    switch(action.type) {
        case PostsTypes.GET_POST:
            return action.payload
        case PostsTypes.PATCH_POST:
            return action.payload
        default:
            return state
    };
}

export default reducerPosts