import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeService } from '@app-using-tokens/shared/services/theme/theme.service';

@Component({
  selector: 'app-change-the-theme',
  templateUrl: './change-the-theme.component.html',
  styleUrls: ['./change-the-theme.component.scss']
})
export class ChangeTheThemeComponent implements AfterViewInit {

  @ViewChild('theme') theme!: ElementRef;

  constructor(private themeService: ThemeService) { }
  ngAfterViewInit(): void {
    this.onChange();
  }

  onChange() {
    this.themeService.setTheme(this.theme.nativeElement.value);
  }

}
