import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoCompleto } from './curriculo-completo.component';

describe('CurriculoCompleto', () => {
  let component: CurriculoCompleto;
  let fixture: ComponentFixture<CurriculoCompleto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculoCompleto]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurriculoCompleto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
