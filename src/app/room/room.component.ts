import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent {

  @Input() roomId:string = "320 ";
  @Input() guest:string = "";

  isDoNotDisturb:boolean=true;

  switchDoNotDisturb(): void{
    this.isDoNotDisturb = !this.isDoNotDisturb;
  }
  knockKnock(): void{
    console.log(`Knock Knock ${this.guest}` );
  }

  onFiddleBottleNotify = (bottleCount: number)=>{
    alert(`Fridge only has ${bottleCount} left`);
}


}
