import { TestBed } from '@angular/core/testing';

import { WeatherTempService } from './weather-temp.service';

describe('WeatherTempService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherTempService = TestBed.get(WeatherTempService);
    expect(service).toBeTruthy();
  });
});
