import { ColumnConfig } from '@api/model/column.model';

export const COLUMN_LIST: ColumnConfig[] = [
	{
		field: 'action',
		header: 'action',
		width: 100,
		align: 'center',
		thStyle: { left: '0' },
		tdStyle: { left: '0' },
		thStyleClass: 'sticky-cell',
		tdStyleClass: 'sticky-cell',
	},
	{ field: 'name', header: 'name', width: 150 },
	{ field: 'type', header: 'type', width: 150 },
	{ field: 'status', header: 'status', width: 150 },
	{ field: 'ownerId', header: 'ownerId', width: 200 },
	{ field: 'qaUser', header: 'qaUser', width: 250 },
	{ field: 'secondaryOwnerId', header: 'secondaryOwnerId', width: 200 },
	{ field: 'description', header: 'description', width: 300 },
];
