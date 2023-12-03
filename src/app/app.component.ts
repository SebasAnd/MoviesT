import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(){
    let InfoMovies:any[] = [
      {
        id:1,
        Title : "Tenet",
        Description:"Armed with only one word, Tenet, and fighting for the survival of the entire world, a"+
        "Protagonist journeys through a twilight world of international espionage on a mission that will unfold in"+
        "something beyond real time.",
        Rating: 7.8,
        Duration: "2h 30 min",
        Genre: ["Action", "Sci-Fi"],
        ReleasedDate:"3 September 2020",
        TrailerLink: "https://www.youtube.com/embed/LdOM0x0XDMo",
        PosterImage:"/assets/Tenet.png"      
      },
      {
        id:2,
        Title : "Spider-Man: Into the Spider-Verse",
        Description:"Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-"+
        "powered individuals from other dimensions to stop a threat for all realities.",
        Rating: 8.4,
        Duration: "1h 57min",
        Genre: ["Action", "Animation", "Adventure"],
        ReleasedDate:"14 December 2018",
        TrailerLink: "https://www.youtube.com/embed/tg52up16eq0",
        PosterImage:"/assets/Spider_Man.png"      
      },
      {
        id:3,
        Title : "Knives Out",
        Description:"A detective investigates the death of a patriarch of an eccentric, combative family.",
        Rating: 7.9,
        Duration: "2h 10min",
        Genre: ["Comedy", "Crime", "Drama"],
        ReleasedDate:"27 November 2019",
        TrailerLink: "https://www.youtube.com/embed/qGqiHJTsRkQ",
        PosterImage:"/assets/Knives_Out.png"      
      },
      {
        id:4,
        Title : "Guardians of the Galaxy",
        Description:"A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        Rating: 8.0,
        Duration: "2h 1min",
        Genre: ["Action", "Adventure", "Comedy"],
        ReleasedDate:"1 August 2014",
        TrailerLink: "https://www.youtube.com/embed/d96cjJhvlMA",
        PosterImage:"/assets/Guardians_of_The_Galaxy.png"      
      },
      {
        id:5,
        Title : "Avengers: Age of Ultron",
        Description:"When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program"+
        "called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron"+
        "from enacting his terrible plan.",
        Rating: 7.3,
        Duration: "2h 21min",
        Genre: ["Action", "Adventure", "Sci-Fi"],
        ReleasedDate:"1 May 2015",
        TrailerLink: "https://www.youtube.com/embed/tmeOjFno6Do",
        PosterImage:"/assets/Avengers.png"      
      }];
      localStorage.setItem('AllMovies', JSON.stringify(InfoMovies));
      localStorage.setItem('LikedMovies', JSON.stringify({myMovies: []}));
  }
  title = 'Movies';
}
