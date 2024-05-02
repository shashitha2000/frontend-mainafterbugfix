import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotuiComponent } from './botui.component';

describe('BotuiComponent', () => {
  let component: BotuiComponent;
  let fixture: ComponentFixture<BotuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotuiComponent]
    });
    fixture = TestBed.createComponent(BotuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
