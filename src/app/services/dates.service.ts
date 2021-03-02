import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor(private http: HttpClient) { }
  getDateById(id): Observable<object> {
    return this.http.get(`/api/dates/${id}`)
  }

  createAppoiment(data): Observable<object> {
    return this.http.post(`/api/dates/create`, data)
  }

  editAppointment(data): Observable<object> {
    return this.http.put('/api/dates/edit', data)
  }
}
