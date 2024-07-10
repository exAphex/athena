import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioninteractionComponent } from './sessioninteraction.component';

describe('SessioninteractionComponent', () => {
  let component: SessioninteractionComponent;
  let fixture: ComponentFixture<SessioninteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessioninteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessioninteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
