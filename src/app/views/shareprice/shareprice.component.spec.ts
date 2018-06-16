import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepriceComponent } from './shareprice.component';

describe('SharepriceComponent', () => {
  let component: SharepriceComponent;
  let fixture: ComponentFixture<SharepriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharepriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
