import { RuleStatus, RuleType } from '@shared/enum';
import { Document, Group, Project, Rule } from '@shared/model';

export const groupList: Group[] = [
	{
		name: 'N99',
	},
	{
		name: 'N98',
	},
	{
		name: 'N97',
	},
	{
		name: 'N96',
	},
	{
		name: 'N95',
	},
	{
		name: 'N94',
	},
	{
		name: 'N93',
	},
	{
		name: 'N92',
	},
	{
		name: 'N91',
	},
	{
		name: 'N90',
	},
];

export const projectList: Project[] = [
	{
		name: 'Project Name 1',
		dueDate: '2023-10-01',
		progress: 60,
		status: '',
	},
	{
		name: 'Project Name 2',
		dueDate: '2023-10-01',
		progress: 60,
		status: '',
	},
	{
		name: 'Project Name 3',
		dueDate: '2023-10-01',
		progress: 60,
		status: '',
	},
	{
		name: 'Project Name 4',
		dueDate: '2023-10-01',
		progress: 60,
		status: '',
	},
	{
		name: 'Project Name 5',
		dueDate: '2023-10-01',
		progress: 60,
		status: '',
	},
];

export const documentLst: Document[] = [
	{
		name: 'Document 1',
		dueDate: '2023-10-05',
		progress: 80,
		status: '',
	},
	{
		name: 'Document 2',
		dueDate: '2023-10-05',
		progress: 80,
		status: '',
	},
	{
		name: 'Document 3',
		dueDate: '2023-10-05',
		progress: 80,
		status: '',
	},
];

export const ruleList: Rule[] = [
	{
		name: 'Rule 1',
		type: RuleType.NEW,
		status: RuleStatus.DOING,
		ownerId: 'Owner_1',
		hasQa: true,
		qaUserId: 'QA User 1',
		secondaryOwnerId: 'Secondary Owner 1',
	},
	{
		name: 'Rule 2',
		type: RuleType.MODIFIED,
		status: RuleStatus.DOING,
		ownerId: 'Owner 1',
		hasQa: true,
		qaUserId: 'QA User 1',
		secondaryOwnerId: 'Secondary Owner 1',
	},
	{
		name: 'Rule 3',
		type: RuleType.MODIFIED,
		status: RuleStatus.DOING,
		ownerId: 'Owner 1',
		hasQa: true,
		qaUserId: 'QA User 1',
		secondaryOwnerId: 'Secondary Owner 1',
	},
	{
		name: 'Rule 4',
		type: RuleType.MODIFIED,
		status: RuleStatus.DONE,
		ownerId: 'Owner 1',
		hasQa: true,
		qaUserId: 'QA User 1',
		secondaryOwnerId: 'Secondary Owner 1',
	},
];
