import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { MaterialModule } from './material.module';
import { CompanyComponent } from './main/menu-components/company/company.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];





@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent
    // MainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
