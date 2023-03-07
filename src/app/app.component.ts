import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoomServiceService} from "./room-service.service";
import {iRoom} from "./shared/room.modele";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'hotel';
  rooms:iRoom[];
  roomSubcription: Subscription;
  constructor(private roomService: RoomServiceService) {
  }

  ngOnInit():void{
    this.roomSubcription = this.roomService.rooms$.subscribe((rooms:iRoom[])=>{
      this.rooms = rooms;
    })
  }
  ngOnDestroy():void {
    if (this.roomSubcription){
      this.roomSubcription.unsubscribe();
    }
  }
}
