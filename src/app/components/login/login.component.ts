import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  wrongUser: string = 'user name o password incorrectos!'
  userLogged: boolean = false

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
    typeUser: new FormControl('')
  })

  constructor(private userServices: UsersService, private router: Router) { }

  ngOnInit(): void {
    // this.prueba()
    console.log(this.loginForm.value)
  }

  prueba() {
    const checkUser = {
      userName: this.loginForm.value.user,
      password: this.loginForm.value.password,
      typeUser: this.loginForm.value.typeUser
    }

    if (this.loginForm.value.user == "" && this.loginForm.value.password == "") {
      console.log('Debe ingresar  usuario y contarsena')
    }
    else {
      this.userServices.loginUser(checkUser).subscribe(
        (data) => {
          console.log('Respuesta del login: ', data);
          if (data) {
            let user = data;
            this.router.navigate(['home'])
            sessionStorage.id = user['id'];
          }

        },
        (error) => {
          console.log('Error:', error)
        }
      );
    }



  }

}
