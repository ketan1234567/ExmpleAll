import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildoneComponent } from './childone.component';

describe('ChildoneComponent', () => {
  let component: ChildoneComponent;
  let fixture: ComponentFixture<ChildoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildoneComponent]
    });
    fixture = TestBed.createComponent(ChildoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
