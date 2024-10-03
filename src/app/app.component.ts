import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieListItemComponent} from "./movie-list-item/movie-list-item.component";
import {MovieService} from "./Services/movie.service";
import {Movie} from "./Shared/Modules/movie";
// @ts-ignore
import { ContentService } from './Services/content.service';
// @ts-ignore
import {Content} from "./Shared/Modules/content";
// @ts-ignore
import { ContentListItemComponent } from './Shared/components/content-list-item/content-list-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, MovieListComponent, MovieListItemComponent, ContentListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  movie: Movie | undefined;
  content: Content | undefined;

  constructor(private movieService: MovieService, private contentService: ContentService) { }

  title = 'Chris-Jamo-Learning-Angular';

  ngOnInit(): void {
    this.movieService.getMovieById(2).subscribe({
      next: (data: Movie | undefined ) => this.movie = data,
      error: err => console.error("Error fetching Movies", err),
      complete:() => console.log("Movie data fetch complete!")
    })

    // Fetch content data using ContentService
    this.contentService.getContentById(1).subscribe({
      next: (data: Content) => this.content = data,
      error: (err: any) => console.error("Error fetching Content", err),
      complete: () => console.log("Content data fetch complete!")
    });
  }

}
