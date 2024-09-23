import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente12Component } from './componente12.component';

describe('Componente12Component', () => {
  let component: Componente12Component;
  let fixture: ComponentFixture<Componente12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
