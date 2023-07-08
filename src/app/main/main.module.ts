import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

// Containers
import { PageComponent } from './page/page.component';
import { PageEffects } from './page/+state/page.effects';

// Components
import { ModalComponent } from './page/modal/modal.component';
import { WidgetComponent } from './page/widget/widget.component';
import {InfoCardComponent} from './page/widget/info-card/info-card.component'
import {BlankCardComponent} from './page/widget/blank-card/blank-card.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    EffectsModule.forFeature([
      PageEffects,
    ]),
  ],
  declarations: [
    // Containers
    PageComponent,
    // Components
    ModalComponent,
    WidgetComponent,
    InfoCardComponent,
    BlankCardComponent
  ],
})
export class MainModule { }
