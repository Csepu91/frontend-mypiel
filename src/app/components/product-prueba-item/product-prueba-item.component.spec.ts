import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPruebaItemComponent } from './product-prueba-item.component';

describe('ProductPruebaItemComponent', () => {
  let component: ProductPruebaItemComponent;
  let fixture: ComponentFixture<ProductPruebaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPruebaItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPruebaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
