import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LayoutService } from '../layout.service';

@Component({
	selector: 'yee-hamburger',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './hamburger.component.html',
	styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
	isOpen = false;

	constructor(private layoutService: LayoutService, private destroyRef: DestroyRef) {}

	ngOnInit(): void {
		this.layoutService.menuOpen$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(isOpen => {
			this.isOpen = isOpen;
		});
	}
}
