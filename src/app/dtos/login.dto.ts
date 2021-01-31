import { Login } from '../models/login';

export class LoginDto {

    username: String;

    password: String;

    public to(login: Login): LoginDto {

        let dto: LoginDto = new LoginDto();
        dto.username = login.username;
        dto.password = login.password;
        return dto;
    }
}