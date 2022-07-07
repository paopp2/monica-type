import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { TypingStatsService } from '../services/typing-stats.service';
import { Switch } from 'src/app/models/switch-type.model';


@Component({
  selector: 'app-options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.css']
})
export class OptionsBarComponent implements OnInit, AfterViewChecked {
  selectedValue: string = 'mxblack';

  switches: Switch[] = [
    {value: 'mxblack', viewValue: 'Cherry MX Blacks'},
    {value: 'mxbrown', viewValue: 'Cherry MX Browns'},
    {value: 'mxblue', viewValue: 'Cherry MX Blues'},
    {value: 'bucklingspring', viewValue: 'Buckling Spring'},
  ];
  constructor(public statsService: TypingStatsService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }
  
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  onReset() {
    this.statsService.reset();
  }
  
  getOption() {
    this.statsService.setSwitch(this.selectedValue);
  }

}
