import { User, UserTypes } from './types'

const initialStateUsuarios: User = {
    name: '',
    username: '',
    userPicture: ''
}

function reducerUsuarios(state = initialStateUsuarios, action: any) {
    switch(action.type) {
        case UserTypes.GET_USER:
            return {
            name: action.payload.name,
            username: action.payload.username,
            userPicture: action.payload.userPicture
        }
    default:
        return state
    }
}

export default reducerUsuarios