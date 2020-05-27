import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('Should return a string', () => {
        const productService: ProductService = TestBed.get(ProductService);

        expect(productService.teste()).toEqual('oi teste');
    })
});
