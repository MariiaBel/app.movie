import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemahallModule } from './pages/cinemahall/cinemahall.module';
import { ApiKeyDatabaseInterceptor } from './servises/http/api-key-database.interceptor';
import { MediaDetailsModule } from './pages/media-details/media-details.module';
import { PersonalDetailsModule } from './pages/personal-details/personal-details.module';
import { ApiUrlDatabaseInterceptor } from './servises/http/api-url-database.interceptor';

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
      useClass: ApiKeyDatabaseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlDatabaseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
