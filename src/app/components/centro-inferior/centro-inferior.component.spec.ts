import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroInferiorComponent } from './centro-inferior.component';

describe('CentroInferiorComponent', () => {
  let component: CentroInferiorComponent;
  let fixture: ComponentFixture<CentroInferiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroInferiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
