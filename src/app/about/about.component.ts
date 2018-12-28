import { Component, OnInit } from '@angular/core';
import { EmpService} from '../Emp.Service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _EmpService: EmpService) { }  

  emplist;
  CricInfo;
  ngOnInit() {
      this._EmpService.getEmp().subscribe((data)=>
      {  
           this.emplist=data;
           this.emplist = this.emplist["Sanjay"]["About"];
      });
      this._EmpService.getNews().subscribe((data)=>
      {  
           this.CricInfo=data;           
           this.CricInfo = this.CricInfo["articles"]["0"]["title"];
      });      
    }

}
