import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodaysweatherPage } from './todaysweather.page';

describe('TodaysweatherPage', () => {
  let component: TodaysweatherPage;
  let fixture: ComponentFixture<TodaysweatherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysweatherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodaysweatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
