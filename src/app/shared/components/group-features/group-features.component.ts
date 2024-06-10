import { Component, OnInit } from '@angular/core';
import { FeatureInterface } from '@app-using-tokens/shared/interfaces/feature.interface';
import { FeaturesService } from '@app-using-tokens/shared/services/features/features.service';

@Component({
  selector: 'app-group-features',
  templateUrl: './group-features.component.html',
  styleUrls: ['./group-features.component.scss']
})
export class GroupFeaturesComponent implements OnInit {

  features: FeatureInterface[] = [];

  constructor(private featureService: FeaturesService) { }

  ngOnInit(): void {
    this.features = this.featureService.getFeatures();
  }

}
