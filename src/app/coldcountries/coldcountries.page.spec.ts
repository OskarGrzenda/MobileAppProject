import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColdcountriesPage } from './coldcountries.page';

describe('ColdcountriesPage', () => {
  let component: ColdcountriesPage;
  let fixture: ComponentFixture<ColdcountriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdcountriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColdcountriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
