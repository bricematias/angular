import {Component, Input, OnInit} from '@angular/core';
import {RoomServiceService} from "../room-service.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent implements OnInit{

  @Input() roomId: number;

  isDoNotDisturb = true;
  guest:string;
  constructor(private roomService: RoomServiceService) {
  }
  ngOnInit():void {
    this.guest = 'John DOE';
  }

  switchDoNotDisturb(): void{
    this.isDoNotDisturb = !this.isDoNotDisturb;
  }
  knockKnock(): void{
    console.log(`Knock Knock ${this.guest}` );
  }

  orderBottles(bottleCount):void{
    console.log(`Alert quantity : ${bottleCount}`)
  }
  deleteRoom():void{
    this.roomService.deleteRoom(this.roomId)
  }



}
