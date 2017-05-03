import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';


import { CarouselComponent } from './welcome/carousel.component';
import {CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CategoryComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      { path: 'welcome', component: CarouselComponent },
      { path: 'categories', component: CategoryComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
