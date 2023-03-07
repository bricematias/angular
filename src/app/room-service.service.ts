import { Injectable } from '@angular/core';
import {iRoom} from "./shared/room.modele";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  public rooms: iRoom[]  = [
    {
      id:1
    },
    {
      id: 2
    },
    {
      id:3
    }
  ];

  public rooms$:BehaviorSubject<iRoom[]>;
  constructor() {
    this.rooms$ = new BehaviorSubject<iRoom[]>(this.rooms);
  }
  deleteRoom(roomId:number):void{
    const index = this.rooms.findIndex((x) => x.id === roomId);
    if (index > -1){
      this.rooms.splice(index,1);
      this.rooms$.next(this.rooms);
    }
  }
  addRoom(): void{
    const id = this.rooms.length === 0 ? 1 :
      Math.max.apply(Math, this.rooms.map((room)=>{
        return room.id;
      })) +1;
    this.rooms.push({
      id
    });
    this.rooms$.next(this.rooms);
  }
}
