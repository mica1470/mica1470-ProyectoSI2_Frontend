import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarfarmaciaComponent } from './agregarfarmacia.component';

describe('AgregarfarmaciaComponent', () => {
  let component: AgregarfarmaciaComponent;
  let fixture: ComponentFixture<AgregarfarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarfarmaciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarfarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
