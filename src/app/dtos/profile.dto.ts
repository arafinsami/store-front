import { Profile } from "../models/profile";

export class ProfileDto {

    id: number;

    firstName: string;

    lastName: string;

    username: string;

    email: string;

    password: string;

    public to(profile: Profile): ProfileDto {

        let dto: ProfileDto = new ProfileDto();
        dto.firstName = profile.firstName;
        dto.lastName = profile.lastName;
        dto.email = profile.email;
        dto.username = profile.username;
        dto.password = profile.password;
        return dto;
    }

    public from(profile: Profile): ProfileDto {

        let dto: ProfileDto = new ProfileDto();
        dto.id = profile.id;
        dto.firstName = profile.firstName;
        dto.lastName = profile.lastName;
        dto.email = profile.email;
        dto.username = profile.username;
        dto.password = profile.password;
        return dto;
    }
}