import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Room } from 'src/app/types/room';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent  implements OnInit {

  constructor(private router: Router, private navController: NavController, private route: ActivatedRoute) { }

  @Input()
  room!: Room;

  ngOnInit() {}

  goQuestionnaryList(){
    this.navController.navigateForward(`${this.router.url}/${this.room._id}/questionnaire`, {relativeTo: this.route,});
  }

}
