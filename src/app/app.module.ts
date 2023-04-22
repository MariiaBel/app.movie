import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemahallModule } from './pages/cinemahall/cinemahall.module';
import { ApiDatabaseInterceptor } from './servises/http/api-database.interceptor';
import { MediaDetailsModule } from './pages/media-details/media-details.module';
import { PersonalDetailsModule } from './pages/personal-details/personal-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CinemahallModule,
    MediaDetailsModule,
    PersonalDetailsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiDatabaseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
