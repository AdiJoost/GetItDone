import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DailyTasksComponent } from './daily-tasks/daily-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DailyTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GetItDone';
}
