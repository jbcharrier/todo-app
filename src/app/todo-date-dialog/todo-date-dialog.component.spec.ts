import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDateDialogComponent } from './todo-date-dialog.component';

describe('TodoDateDialogComponent', () => {
  let component: TodoDateDialogComponent;
  let fixture: ComponentFixture<TodoDateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
