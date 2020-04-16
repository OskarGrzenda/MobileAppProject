import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarmcountriesPage } from './warmcountries.page';

describe('WarmcountriesPage', () => {
  let component: WarmcountriesPage;
  let fixture: ComponentFixture<WarmcountriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmcountriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarmcountriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
