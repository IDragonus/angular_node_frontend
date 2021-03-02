import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { DatesService } from 'src/app/services/dates.service'

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {



  appointmentForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    specialty: new FormControl("", [Validators.required]),
    observation: new FormControl("", [Validators.required]),
    estatus: new FormControl("", [Validators.required])
  });
  statusA = [{ name: 'Creada' }, { name: 'Aprobada' }, { name: 'Cancelada' }]

  constructor(private dateSvc: DatesService) { }

  ngOnInit(): void {
    console.log(sessionStorage)
  }

  createDate() {
    console.log('statu', this.appointmentForm.value.observation)
    const newAppointment = {
      user_id: 2,
      name: this.appointmentForm.value.name,
      lastName: this.appointmentForm.value.lastName,
      specialty: this.appointmentForm.value.specialty,
      observations: this.appointmentForm.value.observation,
      status: this.appointmentForm.value.estatus
    }

    this.dateSvc.createAppoiment(newAppointment).subscribe(
      (data) => {
        if (data) {
          console.log('Cita creada')
        } else {
          console.log('Error')
        }
      }
    )
  }

}
