import { Injectable } from '@angular/core';
import { PhotoBoardService } from './photo-board.service';
import { Observable, of } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { buildPhotosList } from '../test/build-photo-list';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  getPhotos(): Observable<Photo[]> {
    return of(buildPhotosList());
  }
}
