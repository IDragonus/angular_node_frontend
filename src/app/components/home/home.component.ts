import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { UsersService } from '../../services/users.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appointmentData
  userData

  constructor(private router: Router, private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatinets()

  }

  getPatinets() {
    this.userService.getAllPatinets(this.userData).subscribe(
      (data) => {
        this.userData = data
        console.log('PACIENTES:', data)
      }
    )
  }
}
