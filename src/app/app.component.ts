import { Component, OnInit } from '@angular/core';
import { milestones } from './milestones.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'future-ui';

  milestones = milestones;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 2000);
  }

  next() {

  }

  updateMilestone(milestone: { status: string, icon: string }) {
    if(milestone.status === 'warning') {
      this.setToSuccess(milestone);
    } else if(milestone.status === 'success') {
      this.setToDanger(milestone);
    } else if(milestone.status === 'danger') {
      milestone.status = '';
    } else {
      milestone.status = 'warning'
    }
  }

  setToDanger(milestone) {
    milestone.status = 'danger';
  }

  setToSuccess(milestone) {
    milestone.status = 'success';
  }

  randomNumber(min, max) { 
    return Math.round( Math.random() * (max - min) + min );
  } 
}
