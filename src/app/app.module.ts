import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContactUsModule } from './features/contact-us/contact-us.module';
import { AboutModule } from './features/about/about.module';
import { AuthModule } from './features/auth/auth.module';
import { LeaderboardsModule } from './features/leaderboards/leaderboards.module';
import { HomeModule } from './features/home/home.module';
@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AboutModule,
    ContactUsModule,
    AuthModule,
    LeaderboardsModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
