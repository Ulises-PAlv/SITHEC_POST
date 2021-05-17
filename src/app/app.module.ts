import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// !! Importe para hacer un HTTP Request
import { HttpClientModule } from '@angular/common/http';
  // Hacer funcionar nuestras rutas
  import {  RouterModule } from '@angular/router';
  import { ROUTES } from './app.routes';

// ?? Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Err404Component } from './components/err404/err404.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { from } from 'rxjs';
import { PostIndivComponent } from './components/shared/post-indiv/post-indiv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    Err404Component,
    UserComponent,
    PostComponent,
    PostIndivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
