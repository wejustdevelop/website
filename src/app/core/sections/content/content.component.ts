import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthResponse, FacebookService, InitParams, LoginOptions, LoginResponse } from 'ngx-facebook';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContentComponent implements OnInit {

  authResponse: AuthResponse;
  email: string;
  pagePosts: any = [];
  nextPosts: string = `/1846586292025889/posts?fields=id,message,created_time,full_picture,link,permalink_url&limit=5&access_token=${environment.appId}|${environment.appSecret}`;

  // login with options
  options: LoginOptions = {
    scope: 'public_profile,user_friends,email,pages_show_list',
    return_scopes: true,
    enable_profile_selector: true
  };

  constructor(private fb: FacebookService) { }

  ngOnInit() {

    const initParams: InitParams = {
      appId: `${environment.appId}`,
      xfbml: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);

    this.getPost();
  }

  postsScrollDown () {
    this.getPost();
  }

  getPost() {
    this.fb.api(this.nextPosts)
    .then(res => {
      console.log(res);
      console.log(res.data.length);

      if (res.paging.next && res.paging.next !== this.nextPosts) {

        for (let i = 0; i < res.data.length; i++) {
          this.pagePosts.push(res.data[i]);
        }
        this.nextPosts = res.paging.next;
        console.log(this.nextPosts);
        console.log(this.pagePosts);

      }
    })
    .catch( err => {
      console.log(err);
    });
  }

  login() {
    this.fb.login(this.options)
    .then((response: LoginResponse) => {
      console.log('Logged in', response);

      this.fb.api('/me?fields=id,name,email')
      .then(res => {
        console.log('res: ', res);
        this.email = res.email;
      });

      console.log('res: ', this.authResponse);
    })
    .catch(e => console.error('Error logging in'));
  }

  logout() {
    this.fb.logout().then(() => console.log('Logged out!'));
  }
}
