import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureComponent } from './temperature.component';

describe('TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
