import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  rooms  = [
    {
      id:'chambre1',
      guest:''
    },
    {
      id:'chambre2',
      guest:'Brice'
    },
    {
      id:'chambre3',
      guest:'Renaud'
    }
  ];
  constructor() {}
}
