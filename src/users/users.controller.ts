import { Body, Controller, Delete, Get, Param, Patch, Post, Query , ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/updated-user.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly userService : UsersService)  {}

 /*GET users/  GET users?role=value/*/
   /*GET users/:id*/
    /*POST users/*/
     /*PATCH users/:id*/

   @Get() 
   findAll (@Query('role') role?: 'INTERN' |'ENGINEER' |'ADMIN') {
   return this.userService.findAll(role)

   }  
 
   @Get(':id')
   findOne(@Param ('id' , ParseIntPipe) id: number) {
    return this.userService.findOne(id)

   }

   @Post() 
   create(@Body(ValidationPipe) createUserDto:CreateUserDto){
   return this.userService.create(createUserDto) 

}

@Patch(':id')
Update(@Param('id', ParseIntPipe) id:number , @Body(ValidationPipe)  updateUserDto:UpdateUserDto) {

  return this.userService.update(id , updateUserDto)
}

@Delete(':id')
delete(@Param('id' , ParseIntPipe) id:number){
return this.userService.delete(id)

}
}
