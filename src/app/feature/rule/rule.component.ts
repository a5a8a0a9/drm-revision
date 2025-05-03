import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'yee-rule',
	standalone: true,
	template: ` <p>rule works!</p> `,
	styles: [],
})
export class RuleComponent implements OnInit {
	groupId: string = '';
	projectId: string = '';
	documentId: string = '';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {}
}
