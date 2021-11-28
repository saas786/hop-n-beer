import { NgModule,ErrorHandler,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent} from 'src/app/components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
    {provide: ErrorHandler},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule { }