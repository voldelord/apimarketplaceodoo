import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './Modulo-de-usuarios/res_users/res_users.module';
import { ResGroupsModule } from './Modulo-de-usuarios/res_groups/res_groups.module';
import { ResPartnersModule } from './Modulo-de-usuarios/res_partners/res_partners.module';
import { ResCompanysModule } from './Modulo-de-usuarios/res_companys/res_companys.module';
import { ProductProductsModule } from './Modulo-de-productos/product_products/product_products.module';
import { ProductPricelistsModule } from './Modulo-de-productos/product_pricelists/product_pricelists.module';
import { ProductTemplatesModule } from './Modulo-de-productos/product_templates/product_templates.module';
import { ProductCategorysModule } from './Modulo-de-productos/product_categorys/product_categorys.module';
import { ProductAtributesModule } from './Modulo-de-productos/product_atributes/product_atributes.module';
import { ProductPricelistItemsModule } from './Modulo-de-productos/product_pricelist_items/product_pricelist_items.module';
import { ProductAttributesValuesModule } from './Modulo-de-productos/product_attributes_values/product_attributes_values.module';
import { ProductStocksModule } from './Modulo-de-productos/product_stocks/product_stocks.module';
import { ProductStocksMovesModule } from './Modulo-de-productos/product_stocks_moves/product_stocks_moves.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mqttmosca',
      password: 'madara_25',
      database: 'apimarketplaceodoo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    ResGroupsModule,
    ResPartnersModule,
    ResCompanysModule,
    ProductProductsModule,
    ProductPricelistsModule,
    ProductTemplatesModule,
    ProductCategorysModule,
    ProductAtributesModule,
    ProductPricelistItemsModule,
    ProductAttributesValuesModule,
    ProductStocksModule,
    ProductStocksMovesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
