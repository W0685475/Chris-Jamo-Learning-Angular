import { Component } from '@angular/core';
import {Movie} from "../Shared/Modules/movie";
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {NgClass, NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent,
    NgForOf,
    NgClass,
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  // Create an array of movies using the Movie interface
  movies: Movie[] = [
    { id: 1, title: 'Black Panther', director: 'Ryan Coogler', releaseYear: 2018, genre: 'Action/Sci-Fi', rating: 7.3, image: 'Assets/bp.webp'},
    { id: 2, title: 'No Good Deed', director: 'Sam Miller', releaseYear: 2014, genre: 'Thriller/Action', rating: 5.6, image: 'Assets/ngd.jpeg'},
    { id: 3, title: 'Dumb & Dumber', director: 'Peter Farrelly', releaseYear: 1994, genre: 'Comedy', rating: 7.3, image: '../Assets/dd.jpg'},
    { id: 4, title: 'Selena', director: 'Gregory Nava', releaseYear: 1997, genre: 'Drama', rating: 6.9, image: 'Assets/s.jpeg'},
    { id: 5, title: 'No Hard Feelings', director: 'Gene Stupnitsky', releaseYear: 2023, genre: 'Comedy', rating: 6.4, image: 'Assets/nhf.jpeg'},
    { id: 6, title: 'Dirty Dancing', director: 'Emile Ardolino', releaseYear: 1987, genre: 'Romance/Dance', rating: 7.1, image: 'Assets/ddance.jpeg'}
  ];

}
