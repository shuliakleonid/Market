import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItemComponent } from './cart-item.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Product } from '../../interfaces/product';

@Component({
  template: ` <app-cart-item
    [product]="product"
    (changeQuantity)="addQuantityProduct($event)"
  ></app-cart-item>`,
})
class TestHostComponent {
  public product = {
    id: 1,
    description: 'string',
    image: 'string',
    price: 1,
    quantity: 'string',
    title: 'string',
    quantityCart: 1,
  };

  public mark!: Product;

  public addQuantityProduct($event: Product) {
    this.mark = $event;
  }
}

describe('CartItemComponent', ()=>{
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(()=>{

    TestBed.configureTestingModule({
      declarations:[CartItemComponent, TestHostComponent],
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });



  it('should create', function () {
    expect(component).toBeTruthy();
  });

  it('should pass title', function () {
    const title = fixture.debugElement.query(By.css('.order__title')).nativeElement;
    expect(title.textContent).toBe(component.product.title);
  });

  it('should return output value', function () {
    const button = fixture.debugElement.query(By.css('.order__button'));
    button.triggerEventHandler('click', null); //  fake click
    expect(component.product).toEqual(component.mark);
  });

});
