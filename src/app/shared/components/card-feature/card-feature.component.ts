import { Component, Input } from '@angular/core';
import { FeatureInterface } from '@app-using-tokens/shared/interfaces/feature.interface';


@Component({
  selector: 'app-card-feature',
  templateUrl: './card-feature.component.html',
  styleUrls: ['./card-feature.component.scss']
})
export class CardFeatureComponent {
  @Input() item!: FeatureInterface;

  constructor() { }

}
