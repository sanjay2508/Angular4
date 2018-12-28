import { Component, OnInit } from '@angular/core';
import { EmpService} from '../Emp.Service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private _EmpService: EmpService) { }  

  emplist;
  ngOnInit() {
      this._EmpService.getEmp().subscribe((data)=>
      {  
           this.emplist=data;
           this.emplist = this.emplist["Sanjay"]["Experience"];
      });
    }

}
