import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleWrapperComponent } from './module-wrapper.component';

describe('ModuleWrapperComponent', () => {
  let component: ModuleWrapperComponent;
  let fixture: ComponentFixture<ModuleWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleWrapperComponent]
    });
    fixture = TestBed.createComponent(ModuleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
