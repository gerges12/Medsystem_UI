import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreApprovalRequestComponent } from './pre-approval-request.component';

describe('PreApprovalRequestComponent', () => {
  let component: PreApprovalRequestComponent;
  let fixture: ComponentFixture<PreApprovalRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreApprovalRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreApprovalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
