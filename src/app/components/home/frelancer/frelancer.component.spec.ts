import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrelancerComponent } from './frelancer.component';

describe('FrelancerComponent', () => {
  let component: FrelancerComponent;
  let fixture: ComponentFixture<FrelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
