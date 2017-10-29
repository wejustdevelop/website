import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/sections/header/header.component';
import { NavigationComponent } from './shared/sections/navigation/navigation.component';
import { SidebarComponent } from './shared/sections/sidebar/sidebar.component';
import { FooterComponent } from './shared/sections/footer/footer.component';
import { ContentComponent } from './core/sections/content/content.component';
import { ContributorsComponent } from './core/sections/contributors/contributors.component';

import { JobsComponent } from './jobs/jobs.component';
import { NetworkComponent } from './network/network.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
    ContentComponent,
    ContributorsComponent,
    JobsComponent,
    NetworkComponent,
    ContactUsComponent,
    AboutUsComponent,
    FaqComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'network', component: NetworkComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'faq', component: FaqComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    BrowserModule,
    FacebookModule.forRoot(),
    InfiniteScrollModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
