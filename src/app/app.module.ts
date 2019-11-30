import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import { AppComponent } from './app.component';
import LoginComponent from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    RouterModule,
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
  ],
  providers: [HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
