import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementSummaryComponent } from './statement-summary.component';

describe('StatementSummaryComponent', () => {
  let component: StatementSummaryComponent;
  let fixture: ComponentFixture<StatementSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
