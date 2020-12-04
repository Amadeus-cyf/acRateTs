import UserType from './UserType';

export default interface ActionType {
    type: "GET_USER" | "DELETE_USER" | "ERROR",
    payload: UserType,
}
