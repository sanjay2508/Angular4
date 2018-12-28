import { Component, OnInit } from '@angular/core';
import { EmpService} from '../Emp.Service';

@Component({
  selector: 'app-cricket-news',
  templateUrl: './cricket-news.component.html',
  styleUrls: ['./cricket-news.component.css']
})
export class CricketNewsComponent implements OnInit {

  constructor(private _EmpService: EmpService) { }  

  ;
  CricInfo;
  LiveScore;
  ngOnInit() {     
      this._EmpService.getNews().subscribe((data)=>
      {  
           this.CricInfo=data;           
           this.CricInfo = this.CricInfo["articles"];//["0"]["title"];
      }); 
      this._EmpService.getScore().subscribe((data)=>
      {  
           this.LiveScore=data;           
           this.LiveScore = this.LiveScore["score"];//["0"]["title"];
      });      
    }

}
