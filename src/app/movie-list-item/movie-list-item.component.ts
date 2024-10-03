import {Component, Input, OnInit} from '@angular/core';
import { NgStyle} from "@angular/common";
import {Movie} from "../Shared/Modules/movie";
import {MovieListComponent} from "../movie-list/movie-list.component";
import {NgForOf} from "@angular/common";
import {MovieService} from "../Services/movie.service";

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [MovieListItemComponent, NgForOf, NgStyle], // Add NgStyle here
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent {
  @Input() movieListItem? : Movie;

}
