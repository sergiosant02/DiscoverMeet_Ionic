import { User } from "./user";

export interface Room {
    title:        string;
    participants: User[];
    _id:          string;
    owner:        User;
    code:         string;
    createdAt:    Date;
    updatedAt:    Date;
}
