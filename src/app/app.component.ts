import { Component,OnInit } from '@angular/core';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
    
})
export class AppComponent{
  title = 'Tour of Profile'; 
  name = 'Sanjay'; 
  NavItems = ['about', 'experience', 'education', 'skills','intrests','awards','live-score','cricket-news','login'];  
}
