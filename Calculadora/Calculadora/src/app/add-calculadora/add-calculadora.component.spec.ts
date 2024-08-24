import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalculadoraComponent } from './add-calculadora.component';

describe('AddCalculadoraComponent', () => {
  let component: AddCalculadoraComponent;
  let fixture: ComponentFixture<AddCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
