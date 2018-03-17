import { TestBed, inject } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('UtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilService]
    });
  });

  it('should be created', inject([UtilService], (service: UtilService) => {
    expect(service).toBeTruthy();
  }));

  it('should have solution1 function',
    inject([UtilService], (service: UtilService) => {
      expect(service.solution1).toBeTruthy();
    }))

  it('should have array length 8',
    inject([UtilService], (service: UtilService) => {
      let x = service.solution1().length;
      expect(x).toEqual(8);
    }))

  it('random is not Consecutive',
    inject([UtilService], (service: UtilService) => {
      expect(service.validateConsecutive(1326)).toEqual(false);
    }))

  it('random is not Incremental',
    inject([UtilService], (service: UtilService) => {
      //let x = service.generatePin()  //Generate random
      expect(service.validateIncremental(5340)).toEqual(false);
    }))

  it('generatePin should be 4 digits [1000-9999]',
    inject([UtilService], (service: UtilService) => {
      expect(service.generatePin()).toBeGreaterThanOrEqual(1000);
    }))

  it('random pass all the validations',
    inject([UtilService], (service: UtilService) => {
      //let x = service.generatePin()  //Generate random
      expect(service.finalValidation(5340)).toEqual(true);
    }))

});
