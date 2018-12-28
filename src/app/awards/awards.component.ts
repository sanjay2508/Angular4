import { Component, OnInit } from '@angular/core';
import { EmpService} from '../Emp.Service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  constructor(private _EmpService: EmpService) { }  

  emplist;
  ngOnInit() {
      this._EmpService.getEmp().subscribe((data)=>
      {  
           this.emplist=data;
           this.emplist = this.emplist["Sanjay"]["Awards"];
      });
    }

}
