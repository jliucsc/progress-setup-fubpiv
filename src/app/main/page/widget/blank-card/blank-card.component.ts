import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector:'blank-card',
  templateUrl: './blank-card.component.html',
  styleUrls: ['./blank-card.component.scss']
})

export class BlankCardComponent{
  @Input() cardName: string;

  @Output() notifyParent: EventEmitter<boolean> = new EventEmitter();

  buttonClicked(input: boolean){
    this.notifyParent.emit(input)
  }
}