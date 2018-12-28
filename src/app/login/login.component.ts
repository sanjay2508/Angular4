import { Component, OnInit } from '@angular/core';
import { EmpService} from '../Emp.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css'],

  providers: [EmpService]
})
export class LoginComponent implements OnInit {

  constructor(private _EmpService: EmpService) { }  

  emplist;
  ngOnInit() {
      this._EmpService.getEmp().subscribe((data)=>
      {  
           this.emplist=data;
      });
    }
}