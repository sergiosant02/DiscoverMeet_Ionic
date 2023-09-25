import { Component, OnInit } from '@angular/core';
import { DataManagementService } from 'src/app/services/data-management.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent  implements OnInit {

  constructor(private dataManagementService: DataManagementService) { }

  ngOnInit() {
    
  }

}
