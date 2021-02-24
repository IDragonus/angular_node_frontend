import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dates: {
    id: string
    patientName: string
    patientSurName
    date: Date
    specialty: string
    status: string
  }[] = [
      {
        id: '0',
        patientName: 'Ruben',
        patientSurName: 'Alarcon',
        date: new Date(),
        specialty: 'Odontology',
        status: 'on hold'
      },
      {
        id: '1',
        patientName: 'Eliana',
        patientSurName: 'Pina',
        date: new Date(),
        specialty: 'Psychologist',
        status: 'atended'
      },
      {
        id: '2',
        patientName: 'Alonzo',
        patientSurName: 'de la Rosa',
        date: new Date(),
        specialty: 'pediatrician',
        status: 'on hold'
      },
      {
        id: '3',
        patientName: 'Maximiliano',
        patientSurName: 'Sanchez',
        date: new Date(),
        specialty: 'Traumatologist',
        status: 'postponed'
      },
      {
        id: '4',
        patientName: 'Jose',
        patientSurName: 'Alarcon',
        date: new Date(),
        specialty: 'Psychiatrist',
        status: 'canceled'
      },
      {
        id: '5',
        patientName: 'Anna',
        patientSurName: 'Mendoza',
        date: new Date(),
        specialty: 'Odontology',
        status: 'atended'
      },
      {
        id: '6',
        patientName: 'Diana',
        patientSurName: 'Soto',
        date: new Date(),
        specialty: 'Cardiologist',
        status: 'postponed'
      },
      {
        id: '7',
        patientName: 'Anna',
        patientSurName: 'Hernandez',
        date: new Date(),
        specialty: 'Ophthalmologist',
        status: 'on hold'
      },
      {
        id: '8',
        patientName: 'Belkys',
        patientSurName: 'Perez',
        date: new Date(),
        specialty: 'Odontology',
        status: 'on hold'
      },
      {
        id: '9',
        patientName: 'Deilyn',
        patientSurName: 'Pineda',
        date: new Date(),
        specialty: 'Gynaecologist',
        status: 'atended'
      },
      {
        id: '10',
        patientName: 'Randy',
        patientSurName: 'Canelones',
        date: new Date(),
        specialty: 'Odontology',
        status: 'canceled'
      },
      {
        id: '8',
        patientName: 'Gabriela',
        patientSurName: 'Berroteran',
        date: new Date(),
        specialty: 'Odontology',
        status: 'on hold'
      },
      {
        id: '11',
        patientName: 'Lisbeth',
        patientSurName: 'Briceno',
        date: new Date(),
        specialty: 'Gynaecologist',
        status: 'atended'
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
