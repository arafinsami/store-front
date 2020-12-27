import { Signup } from '../models/signup';

export class SignupDto {

    username: string;

    password: string;

    firstName: string;

    lastName: string;

    email: string;

    public to(signup: Signup): SignupDto {

        let dto: SignupDto = new SignupDto();
        dto.username = signup.username;
        dto.password = signup.password;
        dto.firstName = signup.firstName;
        dto.lastName = signup.lastName;
        dto.email = signup.email;
        return dto;
    }
}