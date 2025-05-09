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
		{ label: 'Document_1', path: '/G1/P1/D1', closable: true },
		{ label: 'Document_2', path: '/G1/P1/D2', closable: true },
		{ label: 'Document_3', path: '/G1/P1/D3', closable: true },
		{ label: 'Document_4', path: '/G1/P1/D4', closable: true },
		{ label: 'Document_5', path: '/G1/P1/D5', closable: true },
		{ label: 'Document_6', path: '/G1/P1/D6', closable: true },
		{ label: 'Document_7', path: '/G1/P1/D7', closable: true },
		{ label: 'Document_8', path: '/G1/P1/D8', closable: true },
		{ label: 'Document_9', path: '/G1/P1/D9', closable: true },
		{ label: 'Document_10', path: '/G1/P1/D10', closable: true },
		{ label: 'Document_11', path: '/G1/P1/D11', closable: true },
		{ label: 'Document_12', path: '/G1/P1/D12', closable: true },
		{ label: 'Document_13', path: '/G1/P1/D13', closable: true },
		{ label: 'Document_14', path: '/G1/P1/D14', closable: true },
		{ label: 'Document_15', path: '/G1/P1/D15', closable: true },
	];

	constructor(private router: Router) {}

	ngOnInit() {}
}
