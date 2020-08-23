import {inject, TestBed} from '@angular/core/testing';

import { CartServiceService } from './cart-service.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CartServiceService]
    });
  });
    it('should be created', inject([CartServiceService], (cartService: CartServiceService) => {
        expect(cartService).toBeTruthy();
    }));
    it('Total Record should be 40 for demo', inject([CartServiceService], (cartService: CartServiceService) => {
      let temp = [];
        cartService.getProducts().subscribe((res: any) => {
          temp = res;
            expect(temp.length).toEqual(40);
        }, error => {
            expect(temp.length).toEqual(40);
        });
    }));
});
