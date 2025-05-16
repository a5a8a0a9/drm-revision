import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabItem } from '@api/model';
import { TabComponent } from '@component';
import { PageLayoutComponent } from '@layout';

@Component({
	selector: 'yee-page',
	standalone: true,
	imports: [CommonModule, RouterOutlet, TabComponent, PageLayoutComponent],
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss'],
})
export class PageComponent {
	tabs: TabItem[] = [
		{ label: 'Document_1', path: '/page/D01', closable: true },
		{ label: 'Document_2', path: '/page/D02', closable: true },
		{ label: 'Document_3', path: '/page/D03', closable: true },
		{ label: 'Document_4', path: '/page/D04', closable: true },
		{ label: 'Document_5', path: '/page/D05', closable: true },
		{ label: 'Document_6', path: '/page/D06', closable: true },
		{ label: 'Document_7', path: '/page/D07', closable: true },
		{ label: 'Document_8', path: '/page/D08', closable: true },
		{ label: 'Document_9', path: '/page/D09', closable: true },
		{ label: 'Document_10', path: '/page/D10', closable: true },
		{ label: 'Document_11', path: '/page/D11', closable: true },
		{ label: 'Document_12', path: '/page/D12', closable: true },
		{ label: 'Document_13', path: '/page/D13', closable: true },
		{ label: 'Document_14', path: '/page/D14', closable: true },
		{ label: 'Document_15', path: '/page/D15', closable: true },
	];
}
