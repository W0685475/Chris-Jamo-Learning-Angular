import {Component, OnInit, ViewChild} from '@angular/core';
import {Movie} from "../Shared/Modules/movie";
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {CurrencyPipe, NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {MovieService} from "../Services/movie.service";
import {movies} from "../../data/movies-mockcontent";
import {Router, RouterLink} from "@angular/router";
import {TitleDirectorPipe} from "../pipes/title-director.pipe";
import {HoverHighLightDirective} from "../directives/hover-high-light.directive";
import {ShowDetailsOnHoverDirective} from "../directives/show-details-on-hover.directive";
import {HighLightOnFocusDirective} from "../directives/high-light-on-focus.directive";
import {MatTab} from "@angular/material/tabs";
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
// import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieListItemComponent, NgForOf, NgStyle, RouterLink, CurrencyPipe, TitleDirectorPipe, HoverHighLightDirective, ShowDetailsOnHoverDirective, HighLightOnFocusDirective, MatTable, MatHeaderCellDef, MatCellDef, MatRowDef, MatHeaderRowDef, MatHeaderCell, MatColumnDef, MatCell, MatHeaderRow, MatRow, MatPaginator],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  // Create an array of movies using the Movie interface

  // Reference to the paginator
  @ViewChild(MatPaginator) paginator: MatPaginator | null =null;

  movieList : Movie[] = [];
  dataSource: MatTableDataSource<Movie> = new MatTableDataSource<Movie>(); // Add the dataSource for MatTable
  displayedColumns: string[] = ['id', 'titleDirector', 'genre', 'rating', 'price', 'image', 'actions'];


  constructor(private movieService: MovieService, private router :Router) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: (data: Movie[]) => {
        this.movieList = data;
        this.dataSource.data = data; // Assign the movie list to the dataSource
        if (this.paginator) {
          this.dataSource.paginator = this.paginator; // Set the paginator after data is fetched
        }
      },
      error: (err: any) => console.error("Error fetching Movies", err),
      complete: () => console.log("Movie data fetch complete!")
    });
  }

  delete(id: number): void {
    this.movieService.deleteMovie(id).subscribe({
      next: (updatedMovieList: Movie[]) => {
        this.movieList = updatedMovieList;
        this.dataSource.data = updatedMovieList; // Update dataSource with the updated list
        console.log(`Movie with id ${id} deleted successfully`);
      },
      error: (err: any) => console.error("Error deleting movie", err)
    });
  }

  navigateToMovieList() {
    this.router.navigate(['modify-movie']);
  }
}
