import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { QuestionnaireListComponent } from '../components/questionnaire-list/questionnaire-list.component';
import { QuestionListComponent } from '../components/question-list/question-list.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: ':roomId/questionnaire',
    component: QuestionnaireListComponent,
  }, 
  {
    path: ':roomId/questionnaire/:questionnaireId/question',
    component: QuestionListComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
