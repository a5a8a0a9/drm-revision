import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
	selector: 'yee-page-layout',
	standalone: true,
	imports: [SidebarComponent, HeaderComponent],
	templateUrl: './page-layout.component.html',
	styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent {}
