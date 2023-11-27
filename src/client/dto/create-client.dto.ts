import { IsString, IsEmail, IsEnum, IsNumber, Length, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CLIENT_TYPE } from '../entities/client.entity';

class AdditionalData {
    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    phone_number?: string;
}

export class CreateClientDto {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsEmail()
    email: string;

    @IsEnum(CLIENT_TYPE)
    client_type: CLIENT_TYPE;

    @ValidateNested()
    @Type(() => AdditionalData)
    additional_data?: AdditionalData;

    @IsString()
    @Length(12, 12, { message: 'Card number must be 12 digits long' })
    card_number: string;

    @IsNumber()
    balance: number;
}
