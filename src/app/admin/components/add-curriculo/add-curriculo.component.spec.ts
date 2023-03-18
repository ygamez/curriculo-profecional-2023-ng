import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurriculoComponent } from './add-curriculo.component';

describe('AddCurriculoComponent', () => {
  let component: AddCurriculoComponent;
  let fixture: ComponentFixture<AddCurriculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCurriculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
