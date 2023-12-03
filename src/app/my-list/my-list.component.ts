import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent {
  MoviesArray :any[]=[];
  MoviesArrayBanner :any[]=[];
  colors:string[] = ["primary", "darkred","darkyellow"]; 

  nameSortIcon :string ="arrow_downward"
  dateSortIcon :string ="arrow_downward"

  ngOnInit(){
    let input= localStorage.getItem('AllMovies');
    this.MoviesArray = JSON.parse(input || "{}" );
    this.MoviesArrayBanner = JSON.parse(input || "{}" );

  

    for(let i = 0; i < this.MoviesArray.length;i++)
    {
      if(!this.ValidationLike(this.MoviesArray[i]['id'])){
        this.MoviesArray.splice(i,1);
      }
    }
    if(JSON.parse(localStorage.getItem("LikedMovies")||"[]")["myMovies"].length == 0){
      this.MoviesArray = [];      
    }

    
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
  
  simpleAlert(message:string){
    Swal.fire(message);
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
