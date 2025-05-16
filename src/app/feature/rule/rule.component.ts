import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RuleStatus, RuleType } from '@api/enum';
import { Rule } from '@api/model';
import { DropdownComponent, ResizableColumnDirective, TableComponent } from '@component';
import { COLUMN_LIST } from './column.const';
import { MOCK_RULE_LIST, MOCK_USER_LIST } from './mock.const';

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
	RULE_TYPE_LIST = [
		{ label: 'New', value: RuleType.NEW },
		{ label: 'Modified', value: RuleType.MODIFIED },
		{ label: 'Deleted', value: RuleType.DELETED },
	];

	RULE_STATUS_LIST = [
		{ label: 'Doing', value: RuleStatus.DOING },
		{ label: 'Done', value: RuleStatus.DONE },
	];

	USER_LIST = MOCK_USER_LIST;

	tableData: Rule[] = MOCK_RULE_LIST;
	tableColumnList = COLUMN_LIST;

	constructor() {}

	ngOnInit(): void {}
}
