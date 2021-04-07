import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDirectoryComponent } from './album-directory.component';

describe('AlbumDirectoryComponent', () => {
  let component: AlbumDirectoryComponent;
  let fixture: ComponentFixture<AlbumDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
