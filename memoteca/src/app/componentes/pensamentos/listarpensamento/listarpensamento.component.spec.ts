import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpensamentoComponent } from './listarpensamento.component';

describe('ListarpensamentoComponent', () => {
  let component: ListarpensamentoComponent;
  let fixture: ComponentFixture<ListarpensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarpensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
