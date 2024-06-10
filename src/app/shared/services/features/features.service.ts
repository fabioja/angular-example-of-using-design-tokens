import { Injectable } from '@angular/core';
import { FeatureInterface } from '@app-using-tokens/shared/interfaces/feature.interface';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  private features: FeatureInterface[] = [
    {
      title: "Feature 1",
      description: "Descrição do recurso 1"
    },
    {
      title: "Feature 2",
      description: "Descrição do recurso 2"
    },
    {
      title: "Feature 3",
      description: "Descrição do recurso 3"
    },
    {
      title: "Feature 4",
      description: "Descrição do recurso 4"
    },
    {
      title: "Feature 5",
      description: "Descrição do recurso 5"
    },
    {
      title: "Feature 6",
      description: "Descrição do recurso 6"
    }
  ];

  constructor() { }

  getFeatures() {
    return this.features;
  }
}
