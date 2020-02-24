

export interface IGetAllUserResponse {
    count: Number;
    data: IUser[];
}

export interface IUser {
    // vehicle Information
    uuid: String;
    firstname: String;
    middlename: String;
    lastname: String;
    username: String;
    telephone: Number;
    password: String;
    address: String;
    user_type: String
   
}