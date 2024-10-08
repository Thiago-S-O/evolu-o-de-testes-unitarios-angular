import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ PhotoFrameComponent ]
      imports: [PhotoFrameModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`#${PhotoFrameComponent.prototype.like.name}`, () => {
    it('should trigger (@Output liked) once when called multiple times within debounce time', fakeAsync( () => {
      fixture.detectChanges(); // ciclo de vida disparado
      let times = 0;
      component.liked.subscribe(() => times++);
      component.like();
      component.like();
      tick(500) // faz esperar 0.5s antes de executar o expect
      expect(times).toBe(1);
    }));

    it('should trigger (@Output liked) two times when called outside debounce time', fakeAsync(() => {
      fixture.detectChanges();
      let times = 0;
      component.liked.subscribe(() => times++);
      component.like();
      tick(500)
      component.like();
      tick(500)
      expect(times).toBe(2);
    }))
  });

  it(`(Test DOM): Should display number of likes when (@Input likes) is incremented`, () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter') // neste caso, pelo o like-conter do span (do like-widget)
    // tem acesso ao elemento do dom que corresponde a instancia do elemento dom
    expect(element.textContent.trim()).toBe('1')
  })

  it('(Test DOM): should update aria-labe when (@Input likes) is incremented', () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span')
    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it('(Test DOM): should have aria-label with default (@Input likes)', () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span')
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });

  it('(Test DOM): Should image with src and description when bound to properties', () => {
    const description = 'some description';
    const src = 'http://somesite.com/img.jpg'
    component.src = src;
    component.description = description;
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(description);
  })

});
