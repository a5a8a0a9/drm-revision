import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableComponent } from '@component';

@Component({
	selector: 'yee-rule',
	standalone: true,
	imports: [TableComponent],
	templateUrl: './rule.component.html',
	styleUrls: ['./rule.component.scss'],
})
export class RuleComponent implements OnInit {
	groupId: string = '';
	projectId: string = '';
	documentId: string = '';

	tableData = [
		{ name: 'Alice', email: 'alice@mail.com', role: 'Admin' },
		{ name: 'Bob', email: 'bob@mail.com', role: 'User' },
	];

	tableColumnList = [
		{ field: 'name', header: '姓名', width: 150 },
		{ field: 'email', header: '信箱', width: 300 },
		{ field: 'role', header: '角色', width: 200 },
	];

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {}
}
