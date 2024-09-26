import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {MovieListComponent} from "./movie-list/movie-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chris-Jamo-Learning-Angular';

}
