import { ForgetPassword } from "../models/forgetpassword";

export class ForgetPasswordDto {

    email: String;

    public to(password: ForgetPassword): ForgetPasswordDto {

        let dto: ForgetPasswordDto = new ForgetPasswordDto();
        dto.email = password.email;
        return dto;
    }
}