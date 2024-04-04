import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServersComponent } from './home-servers.component';

describe('HomeServersComponent', () => {
  let component: HomeServersComponent;
  let fixture: ComponentFixture<HomeServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeServersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
