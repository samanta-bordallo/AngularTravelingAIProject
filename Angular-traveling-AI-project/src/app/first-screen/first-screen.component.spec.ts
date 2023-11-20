import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstScreenComponent } from './first-screen.component';

describe('FirstScreenComponent', () => {
  let component: FirstScreenComponent;
  let fixture: ComponentFixture<FirstScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
