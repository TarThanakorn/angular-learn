import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  isLogin = false;
  username = "";
  password = "";
  user = ""

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    if (this.cookieService.check('Authorization')) {
      this.isLogin = true;
      this.user = this.cookieService.get('username');
    }
    else this.isLogin = false;
  }

  getUserData() {
    const headerDict = {
      'Authorization': 'Bearer ' + this.cookieService.get('Authorization')
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.get("/api/auth/profile", requestOptions).subscribe((res: any) => {
      this.user = res.username;
    })
  }

  callLoginApi() {
    let account = {
      username: this.username,
      password: this.password
    };
    this.http.post("/api/auth/login", account).subscribe((res: any) => {
      if (res.USER?.access_token) {
        this.cookieService.set('Authorization', res.USER.access_token);
        this.cookieService.set('username', res.USER.username);
        this.cookieService.set('userId', res.USER.userId);
        this.user = res.USER.username;
        this.isLogin = true;
        this.username = ''
        this.password = ''
        Swal.fire({
          icon: "success",
          title: "Login Success",
          timer: 1300,
          showConfirmButton: false
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Wrong username or password!",
          timer: 1300,
          showConfirmButton: false
        });
      }
    })
  }

  callLogout() {
    this.cookieService.delete('Authorization');
    this.isLogin = false;
  }
}
