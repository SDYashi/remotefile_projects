import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicfilesLoadersComponent } from './publicfiles-loaders.component';

describe('PublicfilesLoadersComponent', () => {
  let component: PublicfilesLoadersComponent;
  let fixture: ComponentFixture<PublicfilesLoadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicfilesLoadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicfilesLoadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
