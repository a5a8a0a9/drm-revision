import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableComponent } from '@component';

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

	tableData = [
		{ name: 'Alice', email: 'alice@mail.com', role: 'Admin' },
		{ name: 'Bob', email: 'bob@mail.com', role: 'User' },
	];

	tableColumnList = [
		{ field: 'name', header: 'name', width: 150 },
		{ field: 'type', header: 'type', width: 150 },
		{ field: 'status', header: 'status', width: 150 },
		{ field: 'ownerId', header: 'ownerId', width: 200 },
		{ field: 'hasQa', header: 'hasQa', width: 100 },
		{ field: 'qaUserId', header: 'qaUserId', width: 200 },
		{ field: 'secondaryOwnerId', header: 'secondaryOwnerId', width: 200 },
	];

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {}
}
