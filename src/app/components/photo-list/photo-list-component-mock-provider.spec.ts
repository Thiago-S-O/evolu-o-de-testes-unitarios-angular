import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/shared/components/photo-board/interfaces/photo';
import { buildPhotosList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { PhotoBoardMockService } from 'src/app/shared/components/photo-board/services/photo-board-mock.service';


describe(PhotoListComponent.name + ' mock provider', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientModule
      ],
      providers: [{
        provide: PhotoBoardService,
        useClass: PhotoBoardMockService // usa o metodo do mock provide, substuindo o serviço original
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(Test DOM): should display board when data arrives`, () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).not.toBeNull();
    expect(loader).toBeNull();
  });
});
