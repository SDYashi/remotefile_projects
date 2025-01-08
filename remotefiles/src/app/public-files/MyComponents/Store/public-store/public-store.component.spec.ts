import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicStoreComponent } from './public-store.component';

describe('PublicStoreComponent', () => {
  let component: PublicStoreComponent;
  let fixture: ComponentFixture<PublicStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
