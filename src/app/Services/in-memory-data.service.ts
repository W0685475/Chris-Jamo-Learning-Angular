import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Movie} from "../Shared/Modules/movie";

export class InMemoryDataService implements InMemoryDbService {
  //returns an object with a students property,
  // which is an array of User objects
  createDb():{movies: Movie[]} {
    /*
    Inside the method, a constant array named students is defined,
    containing several User objects. Each User object represents a
    student with properties such as id, firstName, lastName,
     department, and isAdmin. For example, one of the User objects is
     */
    const movies: Movie[] = [
      { id: 1, title: 'Black Panther', director: 'Ryan Coogler', releaseYear: 2018, genre: 'Action/Sci-Fi', rating: 7.3, image: 'Assets/bp.webp' },
      { id: 2, title: 'No Good Deed', director: 'Sam Miller', releaseYear: 2014, genre: 'Thriller/Action', rating: 5.6, image: 'Assets/ngd.jpeg' },
      { id: 3, title: 'Dumb & Dumber', director: 'Peter Farrelly', releaseYear: 1994, genre: 'Comedy', rating: 7.3, image: 'Assets/dd.jpg' },
      { id: 4, title: 'Selena', director: 'Gregory Nava', releaseYear: 1997, genre: 'Drama', rating: 6.9, image: 'Assets/s.jpeg' },
      { id: 5, title: 'No Hard Feelings', director: 'Gene Stupnitsky', releaseYear: 2023, genre: 'Comedy', rating: 6.4, image: 'Assets/nhf.jpeg' },
      { id: 6, title: 'Dirty Dancing', director: 'Emile Ardolino', releaseYear: 1987, genre: 'Romance/Dance', rating: 7.1, image: 'Assets/ddance.jpeg' }
    ];
    return { movies };
  }
}
