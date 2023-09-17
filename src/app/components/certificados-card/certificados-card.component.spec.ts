import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosCardComponent } from './certificados-card.component';

describe('CertificadosCardComponent', () => {
  let component: CertificadosCardComponent;
  let fixture: ComponentFixture<CertificadosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificadosCardComponent]
    });
    fixture = TestBed.createComponent(CertificadosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
