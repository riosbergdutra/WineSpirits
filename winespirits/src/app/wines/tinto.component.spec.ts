import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinesComponent } from './tinto.component';

describe('TintoComponent', () => {
  let component: WinesComponent;
  let fixture: ComponentFixture<WinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinesComponent]
    });
    fixture = TestBed.createComponent(WinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
