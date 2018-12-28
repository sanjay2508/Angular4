import { Component, OnInit } from '@angular/core';
import { EmpService} from '../Emp.Service';

@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrls: ['./live-score.component.css']
})
export class LiveScoreComponent implements OnInit {

  constructor(private _EmpService: EmpService) { }  ;
  
  LiveScore;
  ngOnInit() {     
       
      this._EmpService.getScore().subscribe((data)=>
      {  
           this.LiveScore=data;           
           //this.LiveScore = this.LiveScore["score"];
      });      
    }

}
