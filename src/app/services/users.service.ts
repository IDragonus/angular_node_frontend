import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  loginUser(data): Observable<object> {
    return this.http.post('/api/users/login', data)
  }

  getAllPatinets(data): Observable<object> {
    return this.http.get('/api/users')
  }

  editPatient(id): Observable<object> {
    return this.http.put(`/api/users/${id}`, null)
  }

}
