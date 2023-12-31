import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  MoviesArray :any[]=[];
  MoviesArrayBanner :any[]=[];
  colors:string[] = ["primary", "darkred","darkyellow"] 

  nameSortIcon :string ="arrow_downward"
  dateSortIcon :string ="arrow_downward"

  ngOnInit(){
    let input= localStorage.getItem('AllMovies');
    this.MoviesArray = JSON.parse(input || "{}" );
    this.MoviesArrayBanner = JSON.parse(input || "{}" );
  }
  SortByName(array:any[], state:string){
    if(state == "reverse"){
      array.sort((a,b)=> a['Title'].localeCompare(b['Title'])).reverse();
    }else{
      array.sort((a,b)=> a['Title'].localeCompare(b['Title']));
    }    
  }
  SortByDate(array:any[],state:string){
    if(state == "reverse"){
      array.sort((a,b)=>  new Date(b['ReleasedDate']).getTime() - new Date(a['ReleasedDate']).getTime()).reverse();
    }else{
      array.sort((a,b)=>  new Date(b['ReleasedDate']).getTime() - new Date(a['ReleasedDate']).getTime());;
    } 
    
  }
  simpleAlert(message:string){
    Swal.fire(message);
  }

  ChangeSortName(){
    if(this.nameSortIcon == "arrow_downward")
    {
      this.nameSortIcon = "arrow_upward"
      this.SortByName(this.MoviesArray,"");
    }else{
      this.nameSortIcon = "arrow_downward"
      this.SortByName(this.MoviesArray,"reverse");
    }
  }
  ChangeSortDate(){
    if(this.dateSortIcon == "arrow_downward")
    {
      this.dateSortIcon = "arrow_upward"
      this.SortByDate(this.MoviesArray,"");
    }else{
      this.dateSortIcon = "arrow_downward"
      this.SortByDate(this.MoviesArray,"reverse");
    }
  }

  ValidationLike(id:number){
    let array = JSON.parse(localStorage.getItem("LikedMovies")||"[]");

    return array['myMovies'].indexOf(id) > -1;      
  }
  
  AddToFavorites(id:number){
    let array = JSON.parse(localStorage.getItem("LikedMovies")||"[]");
    if(array['myMovies'].indexOf(id) > -1){
      
      array['myMovies'].splice(array['myMovies'].indexOf(id),1);
      localStorage.setItem("LikedMovies", JSON.stringify(array));
      this.simpleAlert("Movie Removed From List.");
    }else{
      array['myMovies'].push(id);
      localStorage.setItem("LikedMovies", JSON.stringify(array));
      this.simpleAlert("Movie Added To List");
    }
    
  }

}
