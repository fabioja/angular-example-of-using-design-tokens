import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerInformationComponent } from './components/banner-information/banner-information.component';
import { CardFeatureComponent } from './components/card-feature/card-feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { GroupFeaturesComponent } from './components/group-features/group-features.component';
import { HeaderComponent } from './components/header/header.component';
import { MainBlockComponent } from './components/main-block/main-block.component';

const baseComponents = [
  HeaderComponent,
  BannerInformationComponent,
  CardFeatureComponent,
  FooterComponent,
  GroupFeaturesComponent,
  MainBlockComponent,
];

@NgModule({
  declarations: [
    ...baseComponents,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...baseComponents
  ]
})

export class SharedModule { }
