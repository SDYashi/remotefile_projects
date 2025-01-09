import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDownloadGetfilesComponent } from './public-download-getfiles.component';

describe('PublicDownloadGetfilesComponent', () => {
  let component: PublicDownloadGetfilesComponent;
  let fixture: ComponentFixture<PublicDownloadGetfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDownloadGetfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicDownloadGetfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
