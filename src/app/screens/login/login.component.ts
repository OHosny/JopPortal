import { Component, NgModule, OnInit, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass, formatNumber } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService] 
})

export class LoginComponent {
  fb=inject(FormBuilder)
  router=inject(Router)
  authService = inject(AuthService)
  form = this.fb.nonNullable.group({
    email : ['' ,Validators.required],
    password : ['',Validators.required]
  })



  onSubmit() : void
  {
    const rawForm = this.form.getRawValue()
    this.authService.login(rawForm.email,rawForm.password).subscribe({
      next:()=> { this.router.navigate(['/jobs'])},
      error: (err)=> {
        
          alert(err.message);      }
      
    })
  }
  /*
  
  email :string =''
  password : string =''
  login()
  {
    if(this.email == ''){
      alert('Please enter email')
      return
    }
    if(this.password==''){
      alert('Please enter password')
      return
    }
    this.authService.login(this.email,this.password)
    this.email=''
    this.password=''
    

  }
  */
  
  
  

}

