import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  MoviesArray :any[]=[];
  MoviesDetail :any={};
  colors:string[] = ["primary", "darkred","darkyellow"] 

  generalId:string = "";

  nameSortIcon :string ="arrow_downward"
  dateSortIcon :string ="arrow_downward"

  constructor(private route: ActivatedRoute,private _sanitizer: DomSanitizer) {}

  ngOnInit(){
    let id= this.route.snapshot.paramMap.get('id') 
    this.generalId = id || "";
    let input= localStorage.getItem('AllMovies');
    this.MoviesArray = JSON.parse(input || "{}" );

    for(let i = 0; i < this.MoviesArray.length;i++)
    {
      if(this.MoviesArray[i]['id'] == id){
        this.MoviesDetail= this.MoviesArray[i];
        break;
      }
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

  SanUrl(url: string){
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
