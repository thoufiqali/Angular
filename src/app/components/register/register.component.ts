import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

const baseUrl = 'http://localhost:8080/register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    contactNumber: ''
  };
  submitted = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  saveUser() {
    const data = {
      name: this.user.name,
      username: this.user.username,
      password: this.user.password,
      contactNumber: this.user.contactNumber

    };

    this.httpClient.post(baseUrl,data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    this.router.navigate(['login']);
  }

}
