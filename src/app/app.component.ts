import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TabItem } from '@api/model';
import { TabComponent } from '@component';
import { SidebarComponent } from '@layout';

@Component({
	selector: 'yee-root',
	standalone: true,
	imports: [SidebarComponent, TabComponent, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	tabs: TabItem[] = [
		{ label: 'Document_1', path: '/D1', closable: true },
		{ label: 'Document_2', path: '/D2', closable: true },
		{ label: 'Document_3', path: '/D3', closable: true },
		{ label: 'Document_4', path: '/D4', closable: true },
		{ label: 'Document_5', path: '/D5', closable: true },
		{ label: 'Document_6', path: '/D6', closable: true },
		{ label: 'Document_7', path: '/D7', closable: true },
		{ label: 'Document_8', path: '/D8', closable: true },
		{ label: 'Document_9', path: '/D9', closable: true },
		{ label: 'Document_10', path: '/D10', closable: true },
		{ label: 'Document_11', path: '/D11', closable: true },
		{ label: 'Document_12', path: '/D12', closable: true },
		{ label: 'Document_13', path: '/D13', closable: true },
		{ label: 'Document_14', path: '/D14', closable: true },
		{ label: 'Document_15', path: '/D15', closable: true },
	];

	constructor(private router: Router) {}

	ngOnInit() {}
}
