import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSimplificadoComponent } from './portfolio-simplificado.component';

describe('PortfolioSimplificadoComponent', () => {
  let component: PortfolioSimplificadoComponent;
  let fixture: ComponentFixture<PortfolioSimplificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSimplificadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSimplificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
