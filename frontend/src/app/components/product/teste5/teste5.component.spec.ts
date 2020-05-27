import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste5Component } from './teste5.component';

describe('Teste5Component', () => {
  let component: Teste5Component;
  let fixture: ComponentFixture<Teste5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teste5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
