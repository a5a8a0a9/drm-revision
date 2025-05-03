import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tab } from '@shared/model';

@Component({
	selector: 'yee-tab',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
	@Input() tabs: Tab[] = [];

	selectTab(index: number) {
		this.tabs.forEach((tab, i) => {
			tab.selected = i === index;
		});
	}
}
