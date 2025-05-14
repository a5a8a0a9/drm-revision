import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RuleType } from '@api/enum';
import { Rule } from '@api/model';
import { DropdownComponent, ResizableColumnDirective, TableComponent } from '@component';
import { COLUMN_LIST } from './column.const';
import { MOCK_RULE_LIST } from './mock.const';

@Component({
	selector: 'yee-rule',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		TableComponent,
		ResizableColumnDirective,
		DropdownComponent,
	],
	templateUrl: './rule.component.html',
	styleUrls: ['./rule.component.scss'],
})
export class RuleComponent implements OnInit {
	readonly RuleType = RuleType;

	groupId: string = '';
	projectId: string = '';
	documentId: string = '';

	tableData: Rule[] = MOCK_RULE_LIST;
	tableColumnList = COLUMN_LIST;

	constructor() {}

	ngOnInit(): void {}
}
