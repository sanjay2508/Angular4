import { Component, OnInit } from '@angular/core';
import { EmpService} from '../Emp.Service';

@Component({
  selector: 'app-intrest',
  templateUrl: './intrest.component.html',
  styleUrls: ['./intrest.component.css']
})
export class IntrestComponent implements OnInit {

  constructor(private _EmpService: EmpService) { }  

  emplist;
  ngOnInit() {
      this._EmpService.getEmp().subscribe((data)=>
      {  
           this.emplist=data;
           this.emplist = this.emplist["Sanjay"]["Intrest"];
      });
    }

}
