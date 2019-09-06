// feature module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],  // dependencies
    declarations: [StoreComponent],  // tells angular about StoreComponent
    exports: [StoreComponent]  // tells angular this can be used in other parts of application eg. root module
})
export class StoreModule {}
