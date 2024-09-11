import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chris-Jamo-Learning-Angular';
  protected readonly firstName = firstName;
  protected readonly age = age;
}

let firstName = "Chris";
let age = 27;
