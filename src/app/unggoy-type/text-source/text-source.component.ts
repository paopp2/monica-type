import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TypingStatsService } from '../services/typing-stats.service';
import { paragraph } from 'txtgen';

@Component({
  selector: 'app-text-source',
  templateUrl: './text-source.component.html',
  styleUrls: ['./text-source.component.css']
})

export class TextSourceComponent implements OnInit, OnDestroy {
  @Input() inputText = '';
  @Output() displayTextChange = new EventEmitter<string>();
  displayTextArr: string[] = [];
  private resetSubscription: Subscription;

  constructor(public statsService: TypingStatsService) {
    this.resetSubscription = statsService.resetSubject.subscribe(() => this.setSentence());
  }

  ngOnInit(): void {
    this.setSentence();
  }

  ngOnDestroy(): void {
    this.resetSubscription.unsubscribe();
  }

  get inputTextArr() {
    return this.inputText.split('')
  }

  setSentence(): void {
    let text: string = '';
    text = paragraph(5);

    this.displayTextChange.emit(text);
    this.displayTextArr = text.split('');
  }

  // Returns CSS class based on how arguments match
  compareLetters(displayLetter: string, inputLetter?: string,): string {
    if (!inputLetter) return 'untyped';
    if (inputLetter !== displayLetter && displayLetter === " ") return 'wrong-space';
    return (inputLetter === displayLetter) ? 'correct' : 'wrong';
  }
}