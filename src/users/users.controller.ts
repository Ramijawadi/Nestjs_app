import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { retry } from 'rxjs';

@Controller('users')
export class UsersController {

 /*GET users/*/
   /*GET users/:id*/
    /*POST users/*/
     /*PATCH users/:id*/

   @Get() 
   findAll () {
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
