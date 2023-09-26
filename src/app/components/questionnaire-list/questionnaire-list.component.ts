import { Component, OnInit } from '@angular/core';
import { DataManagementService } from 'src/app/services/data-management.service';
import { Questionnaire } from 'src/app/types/questionnaire';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss'],
})
export class QuestionnaireListComponent  implements OnInit {

  QuestionnaireList: Questionnaire[] = []
  constructor(private dataManagementService: DataManagementService) { }

  ngOnInit() {}

  async getData() {

  }

}
