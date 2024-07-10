import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskpolicyComponent } from './riskpolicy.component';

describe('RiskpolicyComponent', () => {
  let component: RiskpolicyComponent;
  let fixture: ComponentFixture<RiskpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskpolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
