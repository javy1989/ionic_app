import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private url = 'https://jsonplaceholder.typicode.com/users/'
  constructor(private http: HttpClient) { }

  recuperarHoteles(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  recuperarHotelPorId(id):Observable<User>{
    return this.http.get<User>(this.url + id);
  }
}
