import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CloudsPage } from './clouds.page';

describe('CloudsPage', () => {
  let component: CloudsPage;
  let fixture: ComponentFixture<CloudsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CloudsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
