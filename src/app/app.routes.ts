import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {NgModule} from '@angular/core';
import {ContentComponent} from './core/sections/content/content.component';

const routes = [
  {
    path: '',
    component: ContentComponent
  }, {
    path: 'contact',
    component: ContactUsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
