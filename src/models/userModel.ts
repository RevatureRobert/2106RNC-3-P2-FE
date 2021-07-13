export interface IUser {
    userName: string; // this is their email address
    password: string; // Presumably a hash of their actual password? - B
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
    publicName: string; // this is their public facing names
    nickName: string;
    profile: string;
}
