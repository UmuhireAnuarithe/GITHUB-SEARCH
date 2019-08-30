import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repositories} from'../repositories';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  user:User;
  arrayRepo: Repositories;

  constructor(private http:HttpClient) {
    this.user= new User( "",0,0,0,"","");
    this.arrayRepo = new Repositories("","","");
   }

  ngOnInit() {
  }

}
