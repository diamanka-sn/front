import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeCaComponent } from './commande-ca.component';

describe('CommandeCaComponent', () => {
  let component: CommandeCaComponent;
  let fixture: ComponentFixture<CommandeCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeCaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
