import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SidebarComponent implements OnInit {

  private username: string;
  private repositories: any;

  constructor(private http: HttpClient  ) {
    this.username = 'wejustdevelop';
   }

  ngOnInit() {
    this.http.get('https://api.github.com/users/' + this.username + '/repos').subscribe(data => {
      // Read the result field from the JSON response.
      this.repositories = data;
    });
  }

}
