import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IonicModule } from '@ionic/angular';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule, IonicModule, MatSlideToggleModule
  ],
  exports: [MatFormFieldModule, MatInputModule, MatSelectModule]
})
export class AngularMaterialModule { }
