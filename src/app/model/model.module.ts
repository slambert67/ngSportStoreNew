// feature module for reusability of data model functionality
import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';

// NgModule used to create feature modules
@NgModule({
    // define dependency injection services
    providers: [ProductRepository, StaticDataSource]
})
export class ModelModule {}

