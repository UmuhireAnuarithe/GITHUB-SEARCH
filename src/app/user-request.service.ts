import { Injectable } from '@angular/core';
import { User }  from './user';
import { Repositories } from './repositories';



@Injectable({
  providedIn: 'root'
})

export class UserRequestService {
user:User;
repo: Repositories;
arrayRepo:any[];

  constructor() { }
}
