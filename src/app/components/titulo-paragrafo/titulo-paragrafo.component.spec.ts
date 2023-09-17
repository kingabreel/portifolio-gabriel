import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloParagrafoComponent } from './titulo-paragrafo.component';

describe('TituloParagrafoComponent', () => {
  let component: TituloParagrafoComponent;
  let fixture: ComponentFixture<TituloParagrafoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloParagrafoComponent]
    });
    fixture = TestBed.createComponent(TituloParagrafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
