import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedorComponent } from './resolvedor.component';


describe('ResolvedorComponent', () => {
  let component: ResolvedorComponent;
  let fixture: ComponentFixture<ResolvedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolvedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
