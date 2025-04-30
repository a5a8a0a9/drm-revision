import { CommonModule } from '@angular/common';
import { Component, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { LayoutService } from '../layout.service';
import { documentLst, groupList, projectList } from './mock.const';

@Component({
	selector: 'yee-sidebar',
	standalone: true,
	imports: [CommonModule, HamburgerComponent],
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
	isOpen = false;

	groupList = groupList;
	projectList = projectList;
	documentLst = documentLst;

	constructor(private layoutService: LayoutService, private destroyRef: DestroyRef) {}

	ngOnInit(): void {
		this.layoutService.menuOpen$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(isOpen => {
			this.isOpen = isOpen;
		});
	}

	toggle() {
		this.layoutService.toggleMenu();
	}
}
