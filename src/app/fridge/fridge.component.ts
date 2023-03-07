import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.sass']
})
export class FridgeComponent {
    @Input() isAvailable:boolean = false;
    @Output() notify = new EventEmitter<number>();
    bottleCount:number = 10;
    setBottleCount():void{
      this.bottleCount=10;
}
    getBottle(): void{
      this.bottleCount = this.bottleCount-1;
      if (this.bottleCount >= 6) {
       return
      } else {
        this.notify.emit(this.bottleCount);;
      }
    }
}
