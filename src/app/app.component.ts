import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RuleComponent } from '@feature/rule';
import { SidebarComponent, TabComponent } from '@layout';
import { Tab } from '@shared/model';

@Component({
	selector: 'yee-root',
	standalone: true,
	imports: [SidebarComponent, TabComponent, RuleComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
	];
	constructor(private router: Router) {}
}
