import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule, ReactiveFormsModule, AngularMaterialModule, MatSlideToggleModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
