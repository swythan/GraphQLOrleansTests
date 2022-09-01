import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqSourceSummariesComponent } from './liq-source-summaries.component';

describe('LiqSourceSummariesComponent', () => {
  let component: LiqSourceSummariesComponent;
  let fixture: ComponentFixture<LiqSourceSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiqSourceSummariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiqSourceSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
