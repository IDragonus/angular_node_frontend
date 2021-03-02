import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatesService } from '../services/dates.service'

@Component({
  selector: 'app-editappointmodal',
  templateUrl: './editappointmodal.component.html',
  styleUrls: ['./editappointmodal.component.css']
})
export class EditappointmodalComponent implements OnInit {

  appoint

  editAppoint = new FormGroup({
    status: new FormControl(""),
    observations: new FormControl("")
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dateSvc: DatesService) { }

  ngOnInit(): void {
    this.appoint = this.data
    console.log('el apoint trae', this.appoint)
    console.log('DATA PARA EL EDIT', this.editAppoint)
    this.takeData()
  }

  editAppo(valor) {
    console.log(this.data.id)
    const date = { id: this.data.id, status: valor.value.status, observations: valor.value.observations }
    this.dateSvc.editAppointment(date).subscribe(
      (data) => {
        console.log('DATA', data)
      }
    )
  }

  takeData() {
    this.editAppoint.patchValue({
      status: this.data.status,
      observations: this.data.observations
    })
  }

}
