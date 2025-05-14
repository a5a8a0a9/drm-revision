import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'yee-auth-layout',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './auth-layout.component.html',
	styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent {}
