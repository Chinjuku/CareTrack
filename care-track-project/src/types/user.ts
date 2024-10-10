export type LoginUser = {
    id        : string
    username  : string
    email     : string
    password  : string
    role      : string
}

export enum UserRoles {
    PATIENT = "PATIENT",
    STAFF = "STAFF",
}

export type RegisterUser = {
    username  : string
    email     : string
    password  : string
    role      : UserRoles
    firstname : string
    lastname  : string
}