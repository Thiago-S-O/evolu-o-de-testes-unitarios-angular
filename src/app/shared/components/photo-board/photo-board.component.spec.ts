import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange, SimpleChanges } from '@angular/core';

import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';
import { buildPhotosList } from './test/build-photo-list';


describe( PhotoBoardComponent.name, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ PhotoBoardComponent ],
      imports: [PhotoBoardModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Should display rows and columns when (@Input photos) has value `, () => {
    component.photos = buildPhotosList();
    fixture.detectChanges();
    const change: SimpleChanges = {
      photos: new SimpleChange([],component.photos,true)
    }
    component.ngOnChanges(change);
    expect(component.rows.length).withContext('number of rows').toBe(2);
    expect(component.rows[0].length).withContext('number of columns from the first row').toBe(4);
    expect(component.rows[1].length).withContext('number of columns from the second row').toBe(4);
  })
});
