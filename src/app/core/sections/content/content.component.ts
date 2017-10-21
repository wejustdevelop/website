import { Component, OnInit } from '@angular/core';

import { AuthResponse, FacebookService, InitParams, LoginOptions, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  authResponse: AuthResponse;
  email:string;

  // login with options
  options: LoginOptions = {
    scope: 'public_profile,user_friends,email,pages_show_list',
    return_scopes: true,
    enable_profile_selector: true
  };

  constructor(private fb: FacebookService) { }

  ngOnInit() {
    let initParams: InitParams = {
      appId: '276718492821241',
      xfbml: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);
  }



  login(){
    this.fb.login(this.options)
    .then((response: LoginResponse) => {
      console.log('Logged in', response);
      this.fb.api('/me?fields=id,name,email')
      .then(res => {
        console.log('res: ',res);
        this.email = res.email;
      });
      console.log('res: ', this.authResponse);
    })
    .catch(e => console.error('Error logging in'));
  }

  logout(){
    this.fb.logout().then(() => console.log('Logged out!'));
  }
}
