import { Document, Group, Project } from '@shared/model';

export const groupList: Group[] = [
	{
		id: 'G01',
		name: 'N99',
	},
	{
		id: 'G02',
		name: 'N98',
	},
	{
		id: 'G03',
		name: 'N97',
	},
	{
		id: 'G04',
		name: 'N96',
	},
	{
		id: 'G05',
		name: 'N95',
	},
	{
		id: 'G06',
		name: 'N94',
	},
	{
		id: 'G07',
		name: 'N93',
	},
	{
		id: 'G08',
		name: 'N92',
	},
	{
		id: 'G09',
		name: 'N91',
	},
	{
		id: 'G10',
		name: 'N90',
	},
];

export const projectList: Project[] = [
	{
		id: 'P01',
		name: 'Project Name 1',
		dueDate: '2023-10-01',
		progress: 60,
		status: '',
		groupId: 'G01',
	},
	{
		id: 'P02',
		name: 'Project Name 2',
		dueDate: '2023-10-01',
		progress: 60,
		status: '',
		groupId: 'G02',
	},
	{
		id: 'P03',
		name: 'Project Name 3',
		dueDate: '2023-10-01',
		progress: 60,
		status: '',
		groupId: 'G03',
	},
	{
		id: 'P04',
		name: 'Project Name 4',
		dueDate: '2023-10-01',
		progress: 60,
		status: '',
		groupId: 'G04',
	},
	{
		id: 'P05',
		name: 'Project Name 5',
		dueDate: '2023-10-01',
		progress: 60,
		status: '',
		groupId: 'G05',
	},
];

export const documentLst: Document[] = [
	{
		id: 'D01',
		groupId: 'G01',
		projectId: 'P01',
		name: 'Document 1',
		dueDate: '2023-10-05',
		progress: 80,
		status: '',
	},
	{
		id: 'D02',
		groupId: 'G01',
		projectId: 'P01',
		name: 'Document 2',
		dueDate: '2023-10-05',
		progress: 80,
		status: '',
	},
	{
		id: 'D03',
		groupId: 'G01',
		projectId: 'P01',
		name: 'Document 3',
		dueDate: '2023-10-05',
		progress: 80,
		status: '',
	},
];
