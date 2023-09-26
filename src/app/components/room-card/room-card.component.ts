import { Component, Input, OnInit } from '@angular/core';

import { Room } from 'src/app/types/room';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent  implements OnInit {

  constructor() { }

  @Input()
  room!: Room;

  ngOnInit() {}

}
