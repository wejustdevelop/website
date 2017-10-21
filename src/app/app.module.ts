import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
