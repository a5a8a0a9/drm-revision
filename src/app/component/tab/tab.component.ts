import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TabItem } from '@shared/model';

@Component({
	selector: 'yee-tab',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit, AfterViewInit {
	@Input() tabs: TabItem[] = [];
	@Input() storageKey = 'yee-tabs';

	@ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLElement>;

	draggingIndex: number | null = null;

	constructor(private router: Router) {}

	ngOnInit(): void {
		const stored = localStorage.getItem(this.storageKey);
		if (stored) {
			try {
				const parsed = JSON.parse(stored);
				if (Array.isArray(parsed.tabs)) {
					this.tabs = parsed.tabs;
				}
				if (parsed.lastPath) {
					setTimeout(() => this.router.navigateByUrl(parsed.lastPath), 0);
				}
			} catch {}
		}
	}

	ngAfterViewInit(): void {
		// 記錄目前 tab
		this.router.events.subscribe(() => {
			this.saveToStorage();
		});
	}

	isActive(path: string): boolean {
		return this.router.url === path;
	}

	scrollLeft() {
		this.scrollContainer.nativeElement.scrollBy({ left: -150, behavior: 'smooth' });
	}

	scrollRight() {
		this.scrollContainer.nativeElement.scrollBy({ left: 150, behavior: 'smooth' });
	}

	navigate(path: string) {
		this.router.navigateByUrl(path);
	}

	closeTab(tab: TabItem) {
		const index = this.tabs.indexOf(tab);
		if (index >= 0) {
			this.tabs.splice(index, 1);
			if (this.isActive(tab.path) && this.tabs.length) {
				const nextTab = this.tabs[Math.max(index - 1, 0)];
				this.router.navigateByUrl(nextTab.path);
			}
			this.saveToStorage();
		}
	}

	saveToStorage() {
		localStorage.setItem(this.storageKey, JSON.stringify({ tabs: this.tabs, lastPath: this.router.url }));
	}

	onDragStart(event: DragEvent, index: number) {
		this.draggingIndex = index;
		const el = event.target as HTMLElement;
		el.classList.add('dragging');
	}

	// drag end (drop 或任何結束)
	onDragEnd(event: DragEvent) {
		const el = event.target as HTMLElement;
		el.classList.remove('dragging');
		this.draggingIndex = null;
	}

	onDrop(index: number) {
		if (this.draggingIndex === null || this.draggingIndex === index) return;

		const movedTab = this.tabs.splice(this.draggingIndex, 1)[0];
		this.tabs.splice(index, 0, movedTab);

		this.draggingIndex = null;

		// 然後移除 dragging
		const items = this.scrollContainer.nativeElement.querySelectorAll('.tab-item');
		items.forEach((el: Element) => el.classList.remove('dragging'));

		this.saveToStorage();
	}

	allowDrop(event: Event) {
		event.preventDefault();
	}
}
