import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RoomListComponent } from '../components/room-list/room-list.component';
import { RoomCardComponent } from '../components/room-card/room-card.component';
import { QuestionnaireListComponent } from '../components/questionnaire-list/questionnaire-list.component';
import { QuestionnaireCardComponent } from '../components/questionnaire-card/questionnaire-card.component';
import { QuestionListComponent } from '../components/question-list/question-list.component';
import { QuestionPageComponent } from '../components/question-page/question-page.component';

@NgModule({
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, RoomListComponent, RoomCardComponent, QuestionnaireListComponent, QuestionnaireCardComponent, QuestionListComponent, QuestionPageComponent]
})
export class Tab1PageModule {}
