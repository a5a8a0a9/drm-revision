import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':groupId/:projectId/:documentId',
		loadComponent: () => import('@feature/rule').then(m => m.RuleComponent),
	},
];
