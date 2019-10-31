//EventEmitter, Output
import { Component } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {}
  /*
    @Output() featureSelecred = new EventEmitter<string>();
    onSelect(feature: string) {
    this.featureSelecred.emit(feature);
  }*/
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
