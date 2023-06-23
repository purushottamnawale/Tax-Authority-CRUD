import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTaxComponent } from './view-tax.component';

describe('ViewTaxComponent', () => {
  let component: ViewTaxComponent;
  let fixture: ComponentFixture<ViewTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
