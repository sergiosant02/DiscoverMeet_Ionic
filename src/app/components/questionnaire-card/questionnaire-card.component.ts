import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Questionnaire } from 'src/app/types/questionnaire';

@Component({
  selector: 'app-questionnaire-card',
  templateUrl: './questionnaire-card.component.html',
  styleUrls: ['./quesstionnaire-card.component.scss'],
})
export class QuestionnaireCardComponent  implements OnInit {

  @Input()
  questionnaire!: Questionnaire;
  
  constructor(private router: Router, private navController: NavController, private route: ActivatedRoute) { }

  

  ngOnInit() {

  }

  goQuestionList(){
    console.log(this.router.url)
    this.navController.navigateForward(`${this.router.url}/${this.questionnaire._id}/question`, {relativeTo: this.route,});
  }

}
