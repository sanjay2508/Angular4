import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { IntrestComponent } from './intrest/intrest.component';
import { AwardsComponent } from './awards/awards.component';
import { CricketNewsComponent } from './cricket-news/cricket-news.component';
import { LiveScoreComponent } from './live-score/live-score.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    IntrestComponent,
    AwardsComponent,
    CricketNewsComponent,
    LiveScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'app-login',
        component: LoginComponent        
      },
      {
        path: 'Register',
        component: RegisterComponent
      },
      {
        path: 'app-about',
        component: AboutComponent
      },
      {
        path: 'app-experience',
        component: ExperienceComponent
      },
      {
        path: 'app-skills',
        component: SkillsComponent
      },
      {
        path: 'app-intrest',
        component: IntrestComponent
      },
      {
        path: 'app-education',
        component: EducationComponent
      },
      {
        path: 'app-awards',
        component: AwardsComponent
      },
      {
        path: 'app-cricket-news',
        component: CricketNewsComponent
      },
      {
        path: 'app-live-score',
        component: LiveScoreComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
