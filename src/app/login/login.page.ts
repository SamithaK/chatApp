import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../providers/profile.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonfunctionsService } from '../providers/commonfunctions.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerForm: FormGroup
  loginForm: FormGroup
  segment: string = "login"
  name;
  constructor(private profile: ProfileService, private fb: FormBuilder,
    private commonFunctions: CommonfunctionsService, private router: Router, private nav: NavController) {

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });

    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });


    this.profile.setHeaders()
    setTimeout(() => {
      //  this.profile.createUser({}).
    }, 2000)

  }

  guest() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        name: this.name
      }
    };
    console.log("this name ", this.name)
    this.nav.navigateForward(['home'], navigationExtras)
  }

  segmentChanged(Event) {
  }

  registerBtn() {
    console.log("form values ", this.registerForm.value)
    //  this.commonFunctions.loader.show("Adding new user")
    this.profile.createUser(this.registerForm.value).then((res) => {
      console.log("succesfully added ", res)
      //  this.router.navigateByUrl('/home');
      this.nav.navigateRoot('home')
      // this.commonFunctions.loader.dismiss()
    }).catch((error) => {
      // this.commonFunctions.loader.dismiss()
      console.log("error while saving user ", error)
    })
  }

  loginBtn() {
    console.log("form values ", this.loginForm.value)
  }

  ngOnInit() {
  }

}
