import { CommonModule } from '@angular/common';
import {
	AfterViewInit,
	Component,
	ElementRef,
	forwardRef,
	HostListener,
	Input,
	OnInit,
	ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

export interface DropdownItem {
	label: string;
	value: any;
}

@Component({
	selector: 'yee-dropdown',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DropdownComponent),
			multi: true,
		},
	],
})
export class DropdownComponent implements OnInit, AfterViewInit, ControlValueAccessor {
	@Input() items: DropdownItem[] = [];
	@Input() placeholder = '請選擇';

	@ViewChild('searchInput', { static: false })
	searchInput!: ElementRef<HTMLInputElement>;

	filterControl = new FormControl('');
	filteredItems: DropdownItem[] = [];
	panelOpen = false;

	// FormControl 相關
	private onChange: (value: string | null) => void = () => {};
	private onTouched: () => void = () => {};
	disabled = false;

	selectedValue: string | null = null;
	get selectedLabel(): string | null {
		const found = this.items.find(item => item.value === this.selectedValue);
		return found ? found.label : null;
	}

	constructor(private elementRef: ElementRef) {}

	ngOnInit() {
		this.filteredItems = [...this.items];

		this.filterControl.valueChanges.subscribe(term => {
			const keyword = (term || '').toLowerCase();
			this.filteredItems = this.items.filter(item => item.label.toLowerCase().includes(keyword));
		});
	}

	ngAfterViewInit() {}

	// ControlValueAccessor
	writeValue(value: string | null): void {
		this.selectedValue = value;
	}
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}
	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	// 打开/关闭逻辑
	onToggleFocus() {
		if (this.disabled) return;
		this.openPanel();
	}

	openPanel() {
		this.panelOpen = true;
		setTimeout(() => this.searchInput.nativeElement.focus(), 0);
	}

	closePanel() {
		this.panelOpen = false;
		this.filterControl.setValue('');
		this.onTouched();
	}

	onSelect(item: DropdownItem) {
		this.selectedValue = item.value;
		this.onChange(item.value);
		this.closePanel();
	}

	@HostListener('document:click', ['$event.target'])
	onOutsideClick(target: HTMLElement) {
		if (this.panelOpen && !this.elementRef.nativeElement.contains(target)) {
			this.closePanel();
		}
	}
}
