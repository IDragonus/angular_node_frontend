import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditappointmodalComponent } from './editappointmodal.component';

describe('EditappointmodalComponent', () => {
  let component: EditappointmodalComponent;
  let fixture: ComponentFixture<EditappointmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditappointmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditappointmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
