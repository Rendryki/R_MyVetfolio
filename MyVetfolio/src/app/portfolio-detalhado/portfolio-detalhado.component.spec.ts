import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetalhadoComponent } from './portfolio-detalhado.component';

describe('PortfolioDetalhadoComponent', () => {
  let component: PortfolioDetalhadoComponent;
  let fixture: ComponentFixture<PortfolioDetalhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDetalhadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
