import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheListaComponent } from './detalhe-lista.component';

describe('DetalheListaComponent', () => {
  let component: DetalheListaComponent;
  let fixture: ComponentFixture<DetalheListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
