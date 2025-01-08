import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponentsLoadersComponent } from './store-components-loaders.component';

describe('StoreComponentsLoadersComponent', () => {
  let component: StoreComponentsLoadersComponent;
  let fixture: ComponentFixture<StoreComponentsLoadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreComponentsLoadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreComponentsLoadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
