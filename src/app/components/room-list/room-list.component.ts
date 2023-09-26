import { Component, OnInit } from '@angular/core';
import { DataManagementService } from 'src/app/services/data-management.service';
import { PersistenceService } from 'src/app/services/persistence.service';
import { Room } from 'src/app/types/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent  implements OnInit {

  constructor(private dataManagementService: DataManagementService, private persistenceService: PersistenceService) { }
  roomList: Room[] = [];
  ngOnInit() {
    this.getData();
  }

  async getData(): Promise<void> {
    this.roomList = await this.dataManagementService.getJoinedRoom();
  }

}
