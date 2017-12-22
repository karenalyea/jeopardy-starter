import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  totalAmount: number = 0;
  userAnswer: string;

  @Input() jeopardyAnswer;
  @Input() jeopardyAmount;
  @Output() nextQuestion = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  submitAnswer() {

    

    if (this.userAnswer == this.jeopardyAnswer) {
      this.totalAmount = this.totalAmount + this.jeopardyAmount;
    }

    this.nextQuestion.emit();
    this.userAnswer = ""
    


  }

}
