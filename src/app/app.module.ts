import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { MyListComponent } from './my-list/my-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
     MatButtonModule,
     MatIconModule,
     MatGridListModule,
     NgbModule,
     MatChipsModule,
     MatCardModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
