import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MyListComponent } from './my-list/my-list.component';

const routes: Routes = [
  { path:"", component: HomeComponent},
  { path:"movieDetails/:id", component: MovieDetailsComponent,},
  { path:"myList", component: MyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
