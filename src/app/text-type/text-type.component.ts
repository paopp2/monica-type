import { Component, OnInit } from '@angular/core';
import { TypingHelperService } from '../typing-helper.service';

@Component({
  selector: 'app-text-type',
  templateUrl: './text-type.component.html',
  styleUrls: ['./text-type.component.css']
})
export class TextTypeComponent implements OnInit {
  textInputArray: string[] = [];

  constructor(private typingHelperService: TypingHelperService) { }

  ngOnInit(): void { }

  setInputText(textArr: string[]) {
    this.textInputArray = textArr;
  }
  
  onReset() {
    this.typingHelperService.resetEvent();
  }
}
