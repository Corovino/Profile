import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencieComponent } from './experiencie.component';

describe('ExperiencieComponent', () => {
  let component: ExperiencieComponent;
  let fixture: ComponentFixture<ExperiencieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
