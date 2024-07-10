import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDecisionComponent } from './get-decision.component';

describe('GetDecisionComponent', () => {
  let component: GetDecisionComponent;
  let fixture: ComponentFixture<GetDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDecisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
