import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CovidCasesPage } from './covid-cases.page';

describe('CovidCasesPage', () => {
  let component: CovidCasesPage;
  let fixture: ComponentFixture<CovidCasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidCasesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CovidCasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
