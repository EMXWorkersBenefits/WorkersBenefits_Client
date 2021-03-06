import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementModalComponent } from './agreement-modal.component';

describe('AgreementModalComponent', () => {
  let component: AgreementModalComponent;
  let fixture: ComponentFixture<AgreementModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
