import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataManagementService } from 'src/app/services/data-management.service';
import { User, UserCredentialsLogin } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formEdit!: FormGroup; 
  check: boolean = false;

  constructor(private dataManagementService: DataManagementService) { }

  ngOnInit() {
    this.formEdit = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required,]
      }),
      password: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  login() {
    const user: UserCredentialsLogin = {
      email: this.formEdit.value.email,
      password: this.formEdit.value.password,
    };

    console.log('user to login:',user);

    this.dataManagementService.login(user);
    
  }

  showPass(value: any) {
    this.check = value.checked;
  }



}
