import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAutocuidadoComponent } from './my-autocuidado.component';

describe('MyAutocuidadoComponent', () => {
  let component: MyAutocuidadoComponent;
  let fixture: ComponentFixture<MyAutocuidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAutocuidadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAutocuidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
