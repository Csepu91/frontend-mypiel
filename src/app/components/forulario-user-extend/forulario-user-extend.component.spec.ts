import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForularioUserExtendComponent } from './forulario-user-extend.component';

describe('ForularioUserExtendComponent', () => {
  let component: ForularioUserExtendComponent;
  let fixture: ComponentFixture<ForularioUserExtendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForularioUserExtendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForularioUserExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
