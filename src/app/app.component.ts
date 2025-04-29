import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '@layout';

@Component({
	selector: 'yee-root',
	standalone: true,
	imports: [RouterOutlet, SidebarComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
