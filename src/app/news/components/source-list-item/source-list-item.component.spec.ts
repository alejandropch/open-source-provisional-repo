import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceListItemComponent } from './source-list-item.component';

describe('SourceListItemComponent', () => {
  let component: SourceListItemComponent;
  let fixture: ComponentFixture<SourceListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceListItemComponent]
    });
    fixture = TestBed.createComponent(SourceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
