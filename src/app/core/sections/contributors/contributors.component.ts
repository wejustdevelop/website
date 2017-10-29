import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContributorsComponent implements OnInit {

  private username: string;
  private repo: string;
  private contributors: any;

  constructor(private http: HttpClient  ) {
    this.username = 'wejustdevelop';
    this.repo = 'website';
   }

  ngOnInit() {
    this.http.get(`https://api.github.com/repos/${this.username}/${this.repo}/contributors`).subscribe(data => {
      // List all contributors of 'website' repository
      this.contributors = data;
      console.log(this.contributors);
    });
  }

}
