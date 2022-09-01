import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqSourceInfosComponent } from './liq-source-infos.component';

describe('LiqSourceInfosComponent', () => {
  let component: LiqSourceInfosComponent;
  let fixture: ComponentFixture<LiqSourceInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiqSourceInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiqSourceInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
