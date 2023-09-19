import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoDestaqueComponent } from './corpo-destaque.component';

describe('CorpoDestaqueComponent', () => {
  let component: CorpoDestaqueComponent;
  let fixture: ComponentFixture<CorpoDestaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpoDestaqueComponent]
    });
    fixture = TestBed.createComponent(CorpoDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
