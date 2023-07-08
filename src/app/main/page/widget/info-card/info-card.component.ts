import {Component,Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector:'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})

export class InfoCardComponent{
  @Input() cardName: string;
  @Output() notifyParent: EventEmitter<boolean> = new EventEmitter();

  buttonClicked(input:boolean){
    this.notifyParent.emit(input);
  }

}