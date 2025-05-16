import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Rule } from '@api/model';
import { DropdownComponent, ResizableColumnDirective, TableComponent } from '@component';
import { COLUMN_LIST } from './column.const';
import { MOCK_RULE_LIST, MOCK_USER_LIST } from './mock.const';
import { RULE_STATUS_LIST, RULE_TYPE_LIST } from './option.const';
import { RuleFilterComponent } from './rule-filter/rule-filter.component';

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
		RuleFilterComponent,
	],
	templateUrl: './rule.component.html',
	styleUrls: ['./rule.component.scss'],
})
export class RuleComponent implements OnInit {
	RULE_TYPE_LIST = RULE_TYPE_LIST;
	RULE_STATUS_LIST = RULE_STATUS_LIST;

	USER_LIST = MOCK_USER_LIST;

	tableData: Rule[] = MOCK_RULE_LIST;
	tableColumnList = COLUMN_LIST;

	constructor() {}

	ngOnInit(): void {}
}
