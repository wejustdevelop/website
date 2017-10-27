import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';
import { FormsModule } from '@angular/forms';
// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/sections/header/header.component';
import { NavigationComponent } from './shared/sections/navigation/navigation.component';
import { SidebarComponent } from './shared/sections/sidebar/sidebar.component';
import { FooterComponent } from './shared/sections/footer/footer.component';
import { ContentComponent } from './core/sections/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FacebookModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
