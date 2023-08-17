import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorComponent } from './vendedor.component';

describe('VendedorComponent', () => {
  let component: VendedorComponent;
  let fixture: ComponentFixture<VendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendedorComponent]
    });
    fixture = TestBed.createComponent(VendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
