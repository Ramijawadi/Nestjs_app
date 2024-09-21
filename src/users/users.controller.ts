import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { retry } from 'rxjs';

@Controller('users')
export class UsersController {

 /*GET users/  GET users?role=value/*/
   /*GET users/:id*/
    /*POST users/*/
     /*PATCH users/:id*/

   @Get() 
   findAll (@Query('role') role?: 'INTERN' |'ENGINEER' |'ADMIN') {
   return []

   }  
 
   @Get(':id')
   findOne(@Param ('id') id: string) {
    return{id}

   }

   @Post() 
   create(@Body() user:{}){
   return user 

}

@Patch(':id')
Update(@Param('id') id:string , @Body()  userUpdated:{}) {

  return{id , ...userUpdated}
}

@Delete(':id')
delete(@Param('id') id:string){
return {id}

}
}
