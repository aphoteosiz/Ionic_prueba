import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http: HttpClient) { }
  getUsuarios() {
    return this.Http.get('https://jsonplaceholder.typicode.com/users');
    
  }
}
