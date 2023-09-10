import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdecoratorComponent } from './inputdecorator.component';

describe('InputdecoratorComponent', () => {
  let component: InputdecoratorComponent;
  let fixture: ComponentFixture<InputdecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputdecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
