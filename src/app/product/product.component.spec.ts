import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Product } from '../model/product';
import { By } from '@angular/platform-browser';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.data = new Product('title', 'description', 'photo', 42, 2);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should emit product on click', () => {
    const spy = spyOn(component.addToBasket, 'emit');

    const button = fixture.debugElement.query(By.css('.btn')).nativeElement as HTMLButtonElement;
    button.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should add class when product stock is 1', () => {
    const div = fixture.debugElement.query(By.css('.product-item')).nativeElement as HTMLDivElement;

    component.data = new Product('title', 'description', 'photo', 42, 2);
    fixture.detectChanges();
    expect(div.classList).not.toContain('last');

    component.data = new Product('title', 'description', 'photo', 42, 1);
    fixture.detectChanges();
    expect(div.classList).toContain('last');
  });
});
