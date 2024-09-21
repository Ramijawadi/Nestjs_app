import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
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
   findOne(@Param ('id') id: string) {
    return this.userService.findOne(+id)

   }

   @Post() 
   create(@Body() user:{name : string , email:string , role : 'INTERN' | 'ENGINEER' | 'ADMIN'}){
   return this.userService.create(user) 

}

@Patch(':id')
Update(@Param('id') id:string , @Body()  userUpdated:{name : string , email:string , role : 'INTERN' | 'ENGINEER' | 'ADMIN'}) {

  return this.userService.update(+id , userUpdated)
}

@Delete(':id')
delete(@Param('id') id:string){
return this.userService.delete(+id)

}
}
