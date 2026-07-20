import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoMedVet } from './curriculo-medvet.component';

describe('CurriculoMedVet', () => {
  let component: CurriculoMedVet;
  let fixture: ComponentFixture<CurriculoMedVet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculoMedVet]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurriculoMedVet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
