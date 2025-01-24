import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInicioComponent } from './my-inicio.component';

describe('MyInicioComponent', () => {
  let component: MyInicioComponent;
  let fixture: ComponentFixture<MyInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
