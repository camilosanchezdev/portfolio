import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcertificadoComponent } from './dialogcertificado.component';

describe('DialogcertificadoComponent', () => {
  let component: DialogcertificadoComponent;
  let fixture: ComponentFixture<DialogcertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
