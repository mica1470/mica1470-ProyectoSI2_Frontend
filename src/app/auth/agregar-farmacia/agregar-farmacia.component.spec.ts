import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFarmaciaComponent } from './agregar-farmacia.component';

describe('AgregarFarmaciaComponent', () => {
  let component: AgregarFarmaciaComponent;
  let fixture: ComponentFixture<AgregarFarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFarmaciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
