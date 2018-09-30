import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule }  from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent} from './book/book.component';
import { BookService } from './book/book.service';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,BookComponent, AboutComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
