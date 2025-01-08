import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFilesViaPc2pcComponent } from './services-files-via-pc2pc.component';

describe('ServicesFilesViaPc2pcComponent', () => {
  let component: ServicesFilesViaPc2pcComponent;
  let fixture: ComponentFixture<ServicesFilesViaPc2pcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesFilesViaPc2pcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesFilesViaPc2pcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
