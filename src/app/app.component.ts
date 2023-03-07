import {Component, OnInit} from '@angular/core';
import {RoomServiceService} from "./room-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'hotel';
  rooms:
    {
    id: string,
    guest:string
    }[] = [];
  constructor(private roomService: RoomServiceService) {}

  ngOnInit():void{
    this.rooms = this.roomService.rooms;
  }
}
