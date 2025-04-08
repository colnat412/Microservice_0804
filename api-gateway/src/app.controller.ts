import { Controller, Get, HttpService } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly http: HttpService) {}

  @Get('/products')
  async getProducts() {
    const res = await this.http.get('http://product-service:3000/products').toPromise();
    return res.data;
  }
}
