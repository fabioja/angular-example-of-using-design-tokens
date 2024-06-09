import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'light-theme' | 'dark-theme' | 'custom-theme' = 'light-theme';

  setTheme(theme: 'light-theme' | 'dark-theme' | 'custom-theme') {
    this.currentTheme = theme;
    document.body.className = theme;
  }

}
