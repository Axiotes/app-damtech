import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRegistrationComponent } from './data-registration.component';

describe('DataRegistrationComponent', () => {
  let component: DataRegistrationComponent;
  let fixture: ComponentFixture<DataRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
