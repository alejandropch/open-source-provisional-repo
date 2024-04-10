import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { SideNavigationBarComponent } from './public/components/side-navigation-bar/side-navigation-bar.component';
import { SourceListItemComponent } from './news/components/source-list-item/source-list-item.component';
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    SideNavigationBarComponent,
    SourceListItemComponent,
    LanguageSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
