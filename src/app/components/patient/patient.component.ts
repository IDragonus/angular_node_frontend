import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DatesService } from '../../services/dates.service'
import { EditappointmodalComponent } from '../../editappointmodal/editappointmodal.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  name
  lastName
  date
  userData

  constructor(private dateSvc: DatesService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userData = this.route.snapshot.params.id
    console.log(this.userData)
    this.getDateById()
  }

  getDateById() {
    let id = this.userData
    this.dateSvc.getDateById(id).subscribe(
      (data) => {
        this.date = data
        console.log('que trajiste', this.date)
        if (this.date.length > 0) {
          this.name = this.date[0].name
          this.lastName = this.date[0].lastName

        } else {
          console.log('Error, no tiene data')
        }
      }
    )
  }

  edit(i) {
    console.log(i)
    const dialogRef = this.dialog.open(EditappointmodalComponent, {
      data: { id: i.id, status: i.status, observations: i.observations },
      height: "70%",
      width: "50%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

      }
    }
    );
  }

}
