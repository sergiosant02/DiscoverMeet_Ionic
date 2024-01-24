import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataManagementService } from 'src/app/services/data-management.service';
import { PersistenceService } from 'src/app/services/persistence.service';
import { Questionnaire } from 'src/app/types/questionnaire';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss'],
})
export class QuestionnaireListComponent  implements OnInit {

  questionnaireList: Questionnaire[] = []
  constructor(private dataManagementService: DataManagementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.questionnaireList = await this.dataManagementService.getQuestionnairesOfRoom(this.route.snapshot.params["roomId"]);
  }

}
