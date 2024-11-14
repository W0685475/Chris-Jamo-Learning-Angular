import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from "../Shared/Modules/movie";

@Pipe({
  name: 'titleDirector',
  standalone: true
})
export class TitleDirectorPipe implements PipeTransform {

  transform(movie: Movie):string {
    return `${movie.title} ${movie.director}`;
  }

}
