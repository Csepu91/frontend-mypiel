import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnMyAutocuidadoComponent } from './on-my-autocuidado.component';

describe('OnMyAutocuidadoComponent', () => {
  let component: OnMyAutocuidadoComponent;
  let fixture: ComponentFixture<OnMyAutocuidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnMyAutocuidadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnMyAutocuidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
