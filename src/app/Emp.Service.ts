import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class EmpService {
    EmpList;
    public _jsonURL = 'assets/text.json'; 
    public CricInfoUrl = 'https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=2da4ccacf29049ef86d6be525b959e78';   
    public LiveScore = 'http://cricapi.com/api/cricketScore/';
    
    //static head = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //static options = new RequestOptions({ headers:EmpService.head });

    constructor(private http: HttpClient) { }

    getEmp(): Observable<any> {      
      return this.http.get(this._jsonURL);            
   }  

   getNews(): Observable<any>{
       return this.http.get(this.CricInfoUrl);
   }
   
   getScore(): Observable<any>{
    return this.http.post(this.LiveScore,{
        "unique_id": "1144995",
        "apikey": "tOaIIhsXotWCCwjRfTKE34fWVvZ2"
      })
}
}
