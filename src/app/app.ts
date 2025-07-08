import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Interactive World Map';
}
