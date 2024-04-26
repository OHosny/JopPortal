import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterModule,RouterOutlet,NgClass,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  isJobSeeker:boolean=true;
  }


