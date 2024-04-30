import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MundoVetComponent } from './mundo-vet.component';

describe('MundoVetComponent', () => {
  let component: MundoVetComponent;
  let fixture: ComponentFixture<MundoVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MundoVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MundoVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
