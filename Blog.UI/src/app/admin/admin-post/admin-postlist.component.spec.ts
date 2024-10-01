import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostListComponent } from './admin-postlist.component';

describe('AdminPostComponent', () => {
  let component: AdminPostListComponent;
  let fixture: ComponentFixture<AdminPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
