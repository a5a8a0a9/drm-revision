import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from '@component';
import { MOCK_USER_LIST } from '../mock.const';
import { RULE_STATUS_LIST, RULE_TYPE_LIST } from '../option.const';

@Component({
	selector: 'yee-rule-filter',
	standalone: true,
	imports: [CommonModule, FormsModule, ReactiveFormsModule, DropdownComponent],
	templateUrl: './rule-filter.component.html',
	styleUrls: ['./rule-filter.component.scss'],
})
export class RuleFilterComponent {
	RULE_STATUS_LIST = RULE_STATUS_LIST;
	RULE_TYPE_LIST = RULE_TYPE_LIST;
	USER_LIST = MOCK_USER_LIST;

	form = this.formBuilder.group({
		name: new FormControl(''),
		description: new FormControl(''),
		ownerId: new FormControl(null),
		secondaryOwnerId: new FormControl(null),
		editorId: new FormControl(null),
		secondaryEditorId: new FormControl(null),
		qaEditorId: new FormControl(null),
		secondaryQaEditorId: new FormControl(null),
		reviewerId: new FormControl(null),
		type: new FormControl(null),
		status: new FormControl(null),
		secondaryStatus: new FormControl(null),
	});

	constructor(private formBuilder: FormBuilder) {}
}
