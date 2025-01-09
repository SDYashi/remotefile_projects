import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfarePhotoGallaryComponent } from './welfare-photo-gallary.component';

describe('WelfarePhotoGallaryComponent', () => {
  let component: WelfarePhotoGallaryComponent;
  let fixture: ComponentFixture<WelfarePhotoGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelfarePhotoGallaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelfarePhotoGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
