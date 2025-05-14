import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: '',
		loadComponent: () => import('@feature/auth').then(m => m.AuthComponent),
		children: [
			{
				path: 'login',
				loadComponent: () => import('@feature/auth').then(m => m.LoginComponent),
			},
		],
	},
];
