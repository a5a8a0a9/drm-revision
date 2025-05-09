import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tab } from '@shared/model';

@Component({
	selector: 'yee-tab',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements AfterViewInit {
	@Input() tabs: Tab[] = [];

	@Input() selectedId: any = null;
	@Output() selectedIdChange = new EventEmitter<any>();

	ngAfterViewInit(): void {
		if (this.selectedId) {
			this.selectTab(this.selectedId);
		} else if (this.tabs.length > 0) {
			this.selectTab(this.tabs[0].id);
		}
	}

	selectTab(id: any) {
		this.selectedIdChange.emit(id);
	}
}
