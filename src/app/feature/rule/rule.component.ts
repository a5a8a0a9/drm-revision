import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Rule } from '@api/model';
import { TableComponent } from '@component';
import { COLUMN_LIST } from './column.const';
import { MOCK_RULE_LIST } from './mock.const';

@Component({
	selector: 'yee-rule',
	standalone: true,
	imports: [CommonModule, TableComponent],
	templateUrl: './rule.component.html',
	styleUrls: ['./rule.component.scss'],
})
export class RuleComponent implements OnInit {
	groupId: string = '';
	projectId: string = '';
	documentId: string = '';

	tableData: Rule[] = MOCK_RULE_LIST;
	tableColumnList = COLUMN_LIST;

	constructor() {}

	ngOnInit(): void {}
}
