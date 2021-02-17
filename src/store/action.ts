import { UserType } from '../typings/UserType';
import { ActionType } from "../typings/ActionType";
import InitialUser from '../const/initialUser';

export const setUser = (user : UserType) : ActionType => {
    return (
        {
            type: "GET_USER",
            payload: user,
        }
    )
}

export const clearUser = () : ActionType => {
    return (
        {
            type: "DELETE_USER",
            payload: InitialUser,
        }
    )
}

export const error = () : ActionType => {
    return (
        {
            type: "ERROR",
            payload: InitialUser,
        }
    )
}
