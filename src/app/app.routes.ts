import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':documentId',
		loadComponent: () => import('@feature/rule').then(m => m.RuleComponent),
	},
];
