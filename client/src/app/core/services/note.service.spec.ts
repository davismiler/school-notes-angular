import { TestBed } from '@angular/core/testing';

import { noteService } from './note.service';

describe('noteService', () => {
  let service: noteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(noteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
