import { BrowserModule } from '@angular/platform-browser';
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
import {AppRoutingModule} from './app.routes';
import {ContactUsModule} from './contact-us/contact-us.module';
import {UnderDevComponent} from './under-dev.component';
import {NetworkComponent} from './network.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
    ContentComponent,
    ContributorsComponent,
    UnderDevComponent,
    NetworkComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FacebookModule.forRoot(),
    InfiniteScrollModule,
    HttpClientModule,
    ContactUsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
