import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { TextSourceComponent } from './unggoy-type/text-source/text-source.component';
import { TextInputComponent } from './unggoy-type/text-input/text-input.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UnggoyTypeComponent } from './unggoy-type/unggoy-type.component';
import { TypingStatsComponent } from './unggoy-type/typing-stats/typing-stats.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SwitchOptionsComponent } from './unggoy-type/switch-options/switch-options.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserBestStatsComponent } from './unggoy-type/user-best-stats/user-best-stats.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContactUsModule } from './features/contact-us/contact-us.module';
import { AboutModule } from './features/about/about.module';
import { AuthModule } from './features/auth/auth.module';
import { LeaderboardsModule } from './features/leaderboards/leaderboards.module';
@NgModule({
  declarations: [
    AppComponent,
    UnggoyTypeComponent,
    TextSourceComponent,
    TextInputComponent,
    TypingStatsComponent,
    SwitchOptionsComponent,
    UserBestStatsComponent
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
    MatSelectModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AboutModule,
    ContactUsModule,
    AuthModule,
    LeaderboardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
