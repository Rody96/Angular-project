import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;
  constructor(private AppareilService: AppareilService) {

   }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.AppareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'éteint') {
      this.AppareilService.switchOnOne(this.index);
    }
  }

}
