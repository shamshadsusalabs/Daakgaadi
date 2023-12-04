import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FooterComponent } from './footer/footer.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { OfferComponent } from './offer/offer.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ShareComponent } from './share/share.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SubscriptionComponent } from '../main-page/subscription/subscription.component';

import { SubscriptiondialogComponent } from './subscriptiondialog/subscriptiondialog.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { PartloadComponent } from './partload/partload.component';
import { ParcelComponent } from './parcel/parcel.component';
import { TruckloadComponent } from './truckload/truckload.component';
import { PackerComponent } from './packer/packer.component';
import { BiketransComponent } from './biketrans/biketrans.component';
import { CartransComponent } from './cartrans/cartrans.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { TrackComponent } from './track/track.component';
import { BookComponent } from './track/book/book.component';
import { BookpackerComponent } from './packer/bookpacker/bookpacker.component';
import { ConfirmformComponent } from './confirmform/confirmform.component';
import { BiketermsComponent } from './biketerms/biketerms.component';
import { TrackidComponent } from './trackid/trackid.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BookHeavyComponent } from './track/book-heavy/book-heavy.component';
import { DomesticpackerComponent } from './packer/domesticpacker/domesticpacker.component';
import { Book1Component } from './track/book1/book1.component';
import { Book2Component } from './track/book2/book2.component';
import { OfficefactoryComponent } from './packer/officefactory/officefactory.component';
import { InternatinalComponent } from './packer/internatinal/internatinal.component';
import { Bookheavy1Component } from './track/bookheavy1/bookheavy1.component';
import { Bookheavy2Component } from './track/bookheavy2/bookheavy2.component';
import { Bookheavy3Component } from './track/bookheavy3/bookheavy3.component';
import { MainbranchComponent } from './mainbranch/mainbranch.component';
import { TermsconditionmodalComponent } from './termsconditionmodal/termsconditionmodal.component';


@NgModule({
  declarations: [
    MainPageComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    SubscriptionComponent,
    NewProductsComponent,
 
    SingleProductComponent,
    FeaturedProductsComponent,
    OfferComponent,
    TermsConditionComponent,
    OrderPlacedComponent,
    CheckoutComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    ShareComponent,
    SubscriptiondialogComponent,
    PartloadComponent,
    ParcelComponent,
    TruckloadComponent,
    PackerComponent,
    BiketransComponent,
    CartransComponent,
    WarehouseComponent,
    TrackComponent,
    BookComponent,
    BookpackerComponent,
    ConfirmformComponent,
    BiketermsComponent,
    TrackidComponent,
    BookHeavyComponent,
    DomesticpackerComponent,
    Book1Component,
    Book2Component,
    OfficefactoryComponent,
    InternatinalComponent,
    Bookheavy1Component,
    Bookheavy2Component,
    Bookheavy3Component,
    MainbranchComponent,
    TermsconditionmodalComponent,
  
    
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatButtonModule,
  
    MatGridListModule, 
    MatIconModule,
    IvyCarouselModule,
    MatProgressSpinnerModule,
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
  
    ClipboardModule,
    MatSlideToggleModule
  ],
})
export class MainPageModule {}
