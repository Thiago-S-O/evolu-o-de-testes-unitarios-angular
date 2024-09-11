import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { delay, map, tap } from 'rxjs/operators';

@Injectable()
export class PhotoBoardService {

  constructor(private http: HttpClient) { }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos')
    // os dados vão vir com letras maiúsculas (o que será o objetivo do teste)
    .pipe(map(photos => {
      return photos.map(photo => {
        return { ...photo, description: photo.description.toUpperCase()}
      })
    }))
    // .pipe(tap(photos => console.log(photos)))
    .pipe(delay(2000))

  }
}
