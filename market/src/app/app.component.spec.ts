import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('App component', () => {
  // let component: AppComponent;
  // beforeEach(() => {
  //   component = new AppComponent();
  // });

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should App component exist', () => {
    expect(component).toBeTruthy();
  });

  it('should title equal Market', function () {
    expect(component.title).toBe('Market');
  });
  it('should render title a h1 tag', function () {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Market');
  });
});
