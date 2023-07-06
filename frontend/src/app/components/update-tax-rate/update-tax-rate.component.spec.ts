import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateTaxRateComponent } from './update-tax-rate.component';

describe('UpdateTaxRateComponent', () => {
  let component: UpdateTaxRateComponent;
  let fixture: ComponentFixture<UpdateTaxRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTaxRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTaxRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
