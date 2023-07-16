import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostViewComponent } from './admin-post-view.component';

describe('AdminPostViewComponent', () => {
  let component: AdminPostViewComponent;
  let fixture: ComponentFixture<AdminPostViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
