import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent, TabComponent } from '@layout';
import { Tab } from '@shared/model';

@Component({
	selector: 'yee-root',
	standalone: true,
	imports: [SidebarComponent, TabComponent, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	tabList: Tab[] = [
		{
			id: 'tab1',
			title: 'tab1',
			content: 'tab1',
			selected: true,
		},
		{
			id: 'tab2',
			title: 'tab2',
			content: 'tab2',
			selected: true,
		},
		{
			id: 'tab3',
			title: 'tab3',
			content: 'tab3',
			selected: true,
		},
		{
			id: 'tab4',
			title: 'tab4',
			content: 'tab4',
			selected: true,
		},
		{
			id: 'tab5',
			title: 'tab5',
			content: 'tab5',
			selected: true,
		},
		{
			id: 'tab6',
			title: 'tab6',
			content: 'tab6',
			selected: true,
		},
		{
			id: 'tab7',
			title: 'tab7',
			content: 'tab7',
			selected: true,
		},
		{
			id: 'tab8',
			title: 'tab8',
			content: 'tab8',
			selected: true,
		},
		{
			id: 'tab9',
			title: 'tab9',
			content: 'tab9',
			selected: true,
		},
		{
			id: 'tab10',
			title: 'tab10',
			content: 'tab10',
			selected: true,
		},
		{
			id: 'tab11',
			title: 'tab11',
			content: 'tab11',
			selected: true,
		},
	];

	activeTabId: string = 'tab1';

	constructor(private router: Router) {}

	ngOnInit() {
		this.activeTabId = this.tabList[0].id;
	}
}
