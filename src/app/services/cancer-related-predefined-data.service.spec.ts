import { TestBed } from '@angular/core/testing';

import { CancerRelatedPredefinedDataService } from './cancer-related-predefined-data.service';

describe('CancerRelatedPredefinedDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancerRelatedPredefinedDataService = TestBed.get(CancerRelatedPredefinedDataService);
    expect(service).toBeTruthy();
  });
});
