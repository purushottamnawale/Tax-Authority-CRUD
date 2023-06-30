import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaxRateComponent } from './view-tax-rate.component';

describe('ViewTaxRateComponent', () => {
  let component: ViewTaxRateComponent;
  let fixture: ComponentFixture<ViewTaxRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaxRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTaxRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
