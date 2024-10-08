import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWithUsComponent } from './start-with-us.component';

describe('StartWithUsComponent', () => {
  let component: StartWithUsComponent;
  let fixture: ComponentFixture<StartWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartWithUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
