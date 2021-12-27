import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePhonebookComponent } from './pipe-phonebook.component';

describe('PipePhonebookComponent', () => {
  let component: PipePhonebookComponent;
  let fixture: ComponentFixture<PipePhonebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePhonebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePhonebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
