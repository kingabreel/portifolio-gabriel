import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosCardComponent } from './projetos-card.component';

describe('ProjetosCardComponent', () => {
  let component: ProjetosCardComponent;
  let fixture: ComponentFixture<ProjetosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetosCardComponent]
    });
    fixture = TestBed.createComponent(ProjetosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
