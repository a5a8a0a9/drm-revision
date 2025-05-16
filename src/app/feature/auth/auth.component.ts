import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from '@layout';

@Component({
	selector: 'yee-auth',
	standalone: true,
	imports: [CommonModule, AuthLayoutComponent, RouterOutlet],
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {}
