import { Component, OnInit, Input } from '@angular/core';
import {JeopardyService } from './jeopardy.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  //already holds all the info about the question
  questionInfo;

 

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  //will need to be called again for next question
  ngOnInit(){
    this.getDataFromService()
    
    
  }
  
  
  
}
