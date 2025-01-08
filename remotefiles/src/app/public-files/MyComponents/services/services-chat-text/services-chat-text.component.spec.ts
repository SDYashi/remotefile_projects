import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesChatTextComponent } from './services-chat-text.component';

describe('ServicesChatTextComponent', () => {
  let component: ServicesChatTextComponent;
  let fixture: ComponentFixture<ServicesChatTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesChatTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesChatTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
