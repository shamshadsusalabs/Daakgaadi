import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule, HTTP_INTERCEPTORS ,HttpClientJsonpModule} from "@angular/common/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InterceptorService } from "./loader/interceptor.service";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { FormsModule } from '@angular/forms';
import { ExampleModule1Module } from './example-module1/example-module1.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatMenuModule,
    NgOtpInputModule,
    HttpClientJsonpModule,
    FormsModule,
    ExampleModule1Module,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}