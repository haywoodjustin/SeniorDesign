import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueListViewComponent } from './queue-list-view.component';

describe('QueueListViewComponent', () => {
  let component: QueueListViewComponent;
  let fixture: ComponentFixture<QueueListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
