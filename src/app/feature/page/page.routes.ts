import { Routes } from '@angular/router';

export const PAGE_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('@feature/page').then(m => m.PageComponent),
		children: [
			{
				path: ':documentId',
				loadComponent: () => import('@feature/rule').then(m => m.RuleComponent),
			},
		],
	},
];
