export interface User {
userId: string,
password: string,
name: string
}

export interface Login {
email: string,
password: string
}

export interface UserList {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}