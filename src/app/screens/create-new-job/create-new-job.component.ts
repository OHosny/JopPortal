import { Component } from '@angular/core';

@Component({
  selector: 'app-create-new-job',
  standalone: true,
  imports: [],
  templateUrl: './create-new-job.component.html',
  styleUrl: './create-new-job.component.css'
})
export class CreateNewJobComponent {
  jobObj : any = {
    "JobId" : 0 ,
    "JobName" : "" ,
    "CreatedDate" : new Date() ,
    "EmployerId" : 0 ,
    "CategoryId" : 0 ,
    "Experience" : "",
    "Package" : "",
    "Location" : "",
    "JobDescription" :"",
    "IsActive":true

  }

}
