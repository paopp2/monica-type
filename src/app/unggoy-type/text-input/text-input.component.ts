import { Component, ElementRef, EventEmitter, OnDestroy, Output, Renderer2, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { InputData } from 'src/app/models/input-data.model';
import { TypingStatsService } from '../services/typing-stats.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnDestroy {
  @Output() inputChange = new EventEmitter<InputData>();
  isTypeFinished = false;
  private resetSubscription: Subscription;
  private stopSubscription: Subscription;
  switchType: string = '';

  private configSuccess: MatSnackBarConfig = {
    duration: 2000,
    panelClass: ['style-success'],    
    horizontalPosition:'start',
    verticalPosition: 'bottom',
  };
  
  constructor(
    public statsService: TypingStatsService, 
    private snackbar: MatSnackBar,
    private renderer: Renderer2,
  ) {
    this.resetSubscription = statsService.resetSubject.subscribe(() => {
      this.isTypeFinished = false;
      // Reset focus to textField on reset 
      renderer.selectRootElement('textField').focus();
    });
    this.stopSubscription = statsService.stopSubject.subscribe(() => this.isTypeFinished = true);
  }
  
  ngOnDestroy(): void {
    this.resetSubscription.unsubscribe();
    this.stopSubscription.unsubscribe();
  }

  onInput(inputEvent: {input: string, rawInputEvent: any}) {
    this.switchType = this.statsService.getData();
    this.inputChange.emit({
      input: inputEvent.input, 
      keyPressed: inputEvent.rawInputEvent.data
    });
    let audio = new Audio();
      audio.src = `../../../assets/audio/${this.switchType}.mp3`;
      audio.play();
   
  }

  disableMovement(event: any){
    if(event.key === "ArrowRight" || event.key === "ArrowLeft") event.preventDefault();
  }

  handlePaste(){
    this.snackbar.open("Type the words, please!", 'Okay', this.configSuccess);
  }

}