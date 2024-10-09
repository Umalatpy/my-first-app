import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { UserComponent } from "./user/user.component";
=======
import { UserComponent } from './user/user.component';
>>>>>>> 1cba9a11ea086b627ab87091ec432a2067d1c46f

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}
