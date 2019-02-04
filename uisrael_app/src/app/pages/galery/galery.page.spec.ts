import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryPage } from './galery.page';

describe('GaleryPage', () => {
  let component: GaleryPage;
  let fixture: ComponentFixture<GaleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
