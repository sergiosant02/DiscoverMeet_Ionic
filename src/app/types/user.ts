export interface User {
    firstName?: string;
    lastName?:  string;
    email:     string;
    password:  string;
    phone?:     string;
    role?:      string;
    plan?:      string;
    genre?:     string;
    blood?:     string;
    birthDate?: Date;
    _id?:       string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserCredentialsLogin {
    email:     string;
    password:  string;
}

