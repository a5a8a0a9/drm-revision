import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';

@Component({
	selector: 'yee-table',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	@Input() data: any[] = [];
	@Input() columns: { field: string; header: string; width: number }[] = [];

	@ViewChild('tableContainer') tableContainer!: ElementRef;

	// 自訂模板
	@ContentChild('header', { read: TemplateRef }) headerTpl!: TemplateRef<any>;
	@ContentChild('row', { read: TemplateRef }) rowTpl!: TemplateRef<any>;
	@ContentChild('noData', { read: TemplateRef }) noDataTpl!: TemplateRef<any>;

	private startX: number = 0;
	private startWidth: number = 0;
	private resizingColumnIndex: number = -1;

	constructor(private renderer: Renderer2) {}

	onResizeMouseDown(event: MouseEvent, index: number) {
		this.resizingColumnIndex = index;
		this.startX = event.pageX;
		this.startWidth = this.columns[index].width;
		this.renderer.addClass(document.body, 'resizing');
		const moveListener = this.renderer.listen('document', 'mousemove', this.onResizeMouseMove.bind(this));
		const upListener = this.renderer.listen('document', 'mouseup', () => {
			this.onResizeMouseUp();
			moveListener();
			upListener();
		});
		event.preventDefault();
	}

	onResizeMouseMove(event: MouseEvent) {
		if (this.resizingColumnIndex < 0) return;
		const diff = event.pageX - this.startX;
		const newWidth = this.startWidth + diff;
		if (newWidth > 50) {
			this.columns[this.resizingColumnIndex].width = newWidth;
		}
	}

	onResizeMouseUp() {
		this.resizingColumnIndex = -1;
		this.renderer.removeClass(document.body, 'resizing');
	}
}
