import { Room } from "./room";

export interface Questionnaire {
    title:       string;
    intents:     number;
    frequency:   string;
    draftmode:   boolean;
    description: string;
    enable:      boolean;
    _id:         string;
    room:        Room;
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
}
