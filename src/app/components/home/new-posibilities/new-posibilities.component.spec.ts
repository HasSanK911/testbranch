import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPosibilitiesComponent } from './new-posibilities.component';

describe('NewPosibilitiesComponent', () => {
  let component: NewPosibilitiesComponent;
  let fixture: ComponentFixture<NewPosibilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPosibilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPosibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
