import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {Movie} from "./Shared/Modules/movie";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chris-Jamo-Learning-Angular';

  // Create an array of movies using the Movie interface
  movies: Movie[] = [
    { id: 1, title: 'Black Panther', director: 'Ryan Coogler', releaseYear: 2018, genre: 'Action/Sci-Fi', rating: 7.3 },
    { id: 2, title: 'No Good Deed', director: 'Sam Miller', releaseYear: 2014, genre: 'Thriller/Action', rating: 5.6 },
    { id: 3, title: 'Dumb & Dumber', director: 'Peter Farrelly', releaseYear: 1994, genre: 'Comedy' },
    { id: 4, title: 'Selena', director: 'Gregory Nava', releaseYear: 1997, genre: 'Drama', rating: 6.9 },
    { id: 5, title: 'No Hard Feelings', director: 'Gene Stupnitsky', releaseYear: 2023, genre: 'Comedy', rating: 6.4 },
    { id: 6, title: 'Dirty Dancing', director: 'Emile Ardolino', releaseYear: 1987, genre: 'Romance/Dance', rating: 7.1 }
  ];

}
