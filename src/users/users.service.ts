import { Injectable } from '@nestjs/common';
import { retry } from 'rxjs';

@Injectable()
export class UsersService {
private users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "INTERN"
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "INTERN"
      },
      {
        id: 3,
        name: "Sam Lee",
        email: "sam@example.com",
        role: "INTERN"
      }
    ];

     findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        
     if(role) {
        return this.users.filter(user => user.role ===role);
     }
     return this.users;
     }

    
     
    findOne(id: number) {

        const user = this.users.find(user =>user.id === id )

        return user
    }
  
    create( user : {name : string , email:string , role : 'INTERN' | 'ENGINEER' | 'ADMIN'}){

        const userHeightid = [...this.users].sort((a,b) => b.id - a.id)

        console.log(userHeightid)

        const newUser = {

            id:userHeightid[0].id +1,
            ...user
        }

        this.users.push(newUser)
        return newUser
       

    }

    update(id: number , updatedUser :{name? : string , email?:string , role? : 'INTERN' | 'ENGINEER' | 'ADMIN'} ){
       this.users = this.users.map(user => {
     if(user.id === id) {

      return {...user , ...updatedUser}

     }
     return user

   })
  
   return this.findOne(id)
    

    }

    delete(id: number) {
        const removedUser = this.findOne(id) 
        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
