import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTestbranchComponent } from './why-testbranch.component';

describe('WhyTestbranchComponent', () => {
  let component: WhyTestbranchComponent;
  let fixture: ComponentFixture<WhyTestbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyTestbranchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyTestbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
