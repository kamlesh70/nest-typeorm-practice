import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateBankerDto {

    @IsString()
    first_name: string;

    @IsOptional()
    @IsString()
    last_name: string;

    @IsEmail()
    email: string
}
