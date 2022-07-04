import { Injectable, Inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TypingStatsService {
  inputText: string = '';
  displayText: string = '';
  phraseTextArray: Array<HTMLSpanElement> = [];
  errorCount: number = 0;
  timeInDs: number = 0;
  isRunning: boolean = false;
  interval: any;

  constructor() { }
  // Signals to subscribe to
  public startSubject = new Subject<void>();
  public resetSubject = new Subject<void>();
  public stopSubject = new Subject<void>();
  // private errorSubject = new Subject<number>();

  // errorData = this.errorSubject.asObservable();

  get inputTextArr(): string[] { return this.inputText.split('') }
  get displayTextArr(): string[] { return this.displayText.split('') }

  start() { 
    this.isRunning = true;
    if(!this.interval) {
      this.interval = setInterval(() => this.timeInDs++, 10); // Update every decisecond
    }
    this.startSubject.next(); 
  }

  reset() {
    this.stop();
    this.errorCount = 0;
    this.timeInDs = 0;
    this.inputText = '';
    this.displayText = '';
    this.resetSubject.next();
    // this.errorSubject.next(0);
  }

  stop() { 
    clearInterval(this.interval);
    this.interval = null;

    this.isRunning = false;
    this.stopSubject.next(); 
  }

  processInput(input: string) {
    this.inputText = input;
    const inputLength = this.inputTextArr.length;
    const inputIndex = inputLength - 1;
    const isWrongInput = this.inputTextArr[inputIndex] !== this.displayTextArr[inputIndex];
    
    if(isWrongInput) {
      this.errorCount++;
    }

    if (inputLength === this.displayText.length) {
      this.stop();
    }
  }

  // onStart() {
  //   this.running = true;
  //   this.interval = setInterval(() => this.timer(), 10); // Update every decisecond
  // }
  
  // onReset() {
  //   this.statsService.reset(); //resets the whole thing
  //   clearInterval(this.interval); //clears the interval in setInterval above
  //   this.storeDs = 0;
  // }

}
