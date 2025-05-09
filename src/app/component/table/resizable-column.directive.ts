import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[yeeResizableColumn]',
	standalone: true,
})
export class ResizableColumnDirective implements OnInit, OnDestroy {
	@Input() column!: { width: number };

	private startX = 0;
	private startWidth = 0;
	private moveUnlisten!: () => void;
	private upUnlisten!: () => void;
	private handleEl!: HTMLElement;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		// 保证宿主有 relative 定位
		this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
		// 建立 resize handle
		this.handleEl = this.renderer.createElement('div');
		this.renderer.addClass(this.handleEl, 'resize-handle');
		this.renderer.appendChild(this.el.nativeElement, this.handleEl);
		// 只在 handle 上監聽拖曳
		this.renderer.listen(this.handleEl, 'mousedown', (e: MouseEvent) => this.onMouseDown(e));
	}

	private onMouseDown(event: MouseEvent) {
		event.stopPropagation();
		event.preventDefault();
		this.startX = event.pageX;
		this.startWidth = this.column.width;
		this.renderer.addClass(document.body, 'resizing');

		this.moveUnlisten = this.renderer.listen('document', 'mousemove', (e: MouseEvent) => this.onMouseMove(e));
		this.upUnlisten = this.renderer.listen('document', 'mouseup', () => this.onMouseUp());
	}

	private onMouseMove(event: MouseEvent) {
		const delta = event.pageX - this.startX;
		const newWidth = this.startWidth + delta;
		if (newWidth > 50) {
			this.column.width = newWidth;
		}
	}

	private onMouseUp() {
		this.renderer.removeClass(document.body, 'resizing');
		if (this.moveUnlisten) this.moveUnlisten();
		if (this.upUnlisten) this.upUnlisten();
	}

	ngOnDestroy() {
		if (this.moveUnlisten) this.moveUnlisten();
		if (this.upUnlisten) this.upUnlisten();
	}
}
