import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsString(
    {message:"name must be a string  !!!" }
  )
  @IsNotEmpty(
    {message:"name is required !" }
  )
    name: string;

    @IsEmail()
    email: string;
    @IsEnum(['INTERN' , 'ENGINEER' , 'ADMIN'],
      {
        message:"valid role is required"
      },
    )
   
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }