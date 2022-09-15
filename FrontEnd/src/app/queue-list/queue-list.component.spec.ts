import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueListComponent } from './queue-list.component';

describe('QueueListComponent', () => {
  let component: QueueListComponent;
  let fixture: ComponentFixture<QueueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
