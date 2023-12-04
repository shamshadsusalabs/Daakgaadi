import { Router, ActivatedRoute } from '@angular/router';
import { Cart } from '../../../_modals/cart.modal';
import { Wishlist } from '../../../_modals/wishlist.modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from "@angular/core";
import { LoaderService } from "src/app/loader/loader.service";
import { Products } from "src/app/_modals/product.modal";
import { ProductService } from "src/app/_services/product.service";
import { MatDialog } from "@angular/material/dialog";
import { SubscriptiondialogComponent } from "../subscriptiondialog/subscriptiondialog.component";
import { AuthenticationService } from "src/app/_services/authentication.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

showFullText = false;

  shortText = `Part Truck Load Service: LTL/PTL "Load is partial, but not time and service" If your load is not enough to completely fill a truck for FTL (full truck load) .`;

  fullText = `but is also not too small for a parcel or less than truckload (LTL), then it apparently falls in partial load. As compared to FTL, you can save almost 35% on PTL (partial truckload) with Daak Gaadi and still be ensured that our carriers will deliver your load without proper handling not causing any probable damage and still getting to the destination faster With our dedicated one point contact load coordinator to connect you with drivers and Transport and Logistics, you can keep continuous track and check of the status and position of your shipment. But how to avail partial load logistics benefits by Daak Gaadi? Simply tell us the dimensions and quantity of the load to ensure that your freight will fit better in the carriage/trailer. As no added freight re-classification charges will be added to overall costs due to freight-less partial loading, you can be rest assured that you’ll not be overcharged.

  What makes us most preferred for part load transportation?
  <ol>
    <li>Expert handling of fleet of trucks</li>
    <li>Minimized operational cost</li>
    <li>GPS enable part load transportation</li>
    <li>Damage-free and safe consignment transportation</li>
    <li>Lastly, 360 degrees service starting from packing to unpacking at the end shipper part your entire load with Daak Gaadi Logistics now</li>
  </ol>`;
   
  showFullText1 = false;
  shortText1 =  `Parcel Delivery Services

  “Delivering happiness with parcels, on-time” Daak Gaadi is not just about delivering huge packages`;
  fullText1 =`even medium sized freight, instead we also indulge in smaller individual pieces in the form of parcels. Because of the increased number of parcels we send and sreceive from and to desired destinations, we have managed to maintain sorting equipments and provide facilities to you to deliver your package in its intact form. We provide door to door express service of transporting parcel within 1-3 working days and even non-working days to give you a roundabout service. We’re slowly heading towards achieving same day delivery targets as and when possible with the help of our far-stretched and expanded network.

  Moreover, you don’t need to look out for drivers coming at your location to collect your parcels, instead we have multiple drop- off locations available as well to let you drop your packages. But soon we’re trying to expand as much as possible in the mentioned domain as well to avoid drivers trucking to your location.
  
  Benefits of parcel shipping with Daak Gaadi Logistics: -
  <ol>
  <li>Damage free and loss free delivery<li>
  <li>Cost effective<li>
  <li>Easy to track parcel status and checkpoints<li>
  <li>No mishandling<li>
  <li>Lastly, direct communication with executives 24*7<li>
  
  <ol>
  `;

  showFullText2=false;
  shortText2=`Full Truck Load Services (FTL)

  “Allow us to do all the heavy lifting for you” If you’re planning to transport a heavy load from one place to another`
  fullText2=`then opting for a full load or full truck load (FTL) logistics is both time-saving and cost-effective. But only when backed by an experienced and consumer cum load-friendly Cargo & logistics company. This is where DAAK GAADI proves to be the best friend of yours and your load. As FTL is all about one shipment delivery, we ensure that your entire shipment is delivered at the very state and condition as when it was packaged at the source. Provide FTL services across the entire nation and also to other countries across the globe with freight services of road, air, and water; our full-load transportation services are faster than expected and more efficient than others.

  Our FTL services come with options of both containerized and open vehicles, depending on what you prefer to choose. The load can vary from almost 3.5 tons to approximately 25 tons with safe large volume freight. But this doesn’t mean that your deliverables will be mishandled. Instead they would be handled with utmost care and precaution like other deliverables at DAAK GAADI With 2000+ pickup points across India, we have made a mark in the industry by doing in reality a 99% on-time pickup and delivery at all times. Your heavy loads will be delivered like that of a parcel- safely, smoothly.`;


  showFullText3=false;
  shortText3=`Bike Transportation

  Zoom and vroom around with caution Whether a two wheeler or a four-wheeler, one’s vehicle is their priced possession`
  ;
  fullText3=` the most preserved possession as well. Daak Gaadi is backed by a team of automotive transportation experts who know and understand how to handle your bikes with utmost safety and care without compromising on its state. Because unlike car, bikes are smaller in size and thus need special locking mechanism to keep them in place. While looking out for bike transportation logistics service at Daak Gaadi, you’ll be given an option whether to opt for open or closed carriages to transport your bike to the desired destination. And based on the model and your choice, a definite and all prices inclusive, budget-friendly logistics plan will be offered to you.

  You can even compare the prices with other logistics company and will surely will be impressed by what we have to offer as our services are at par with what we charge you for moving your bike from one place to other.
  
  Benefits of choosing Daak Gaadi over others: -
  <ol>
  <li>1. 24*7 transportation services available</li>

  <li>2. Tracking mechanism for the entire transit operation</li>

  <li>3. Availability of both open and closed carriages as per the demand</li>

  <li>4. Damage free and supervised packaging and loading irrespective of destination and source</li>

  <li>5. Lastly, pricing that is both cost-effective and within reason Ready to join the bandwagon with thousands and lakhs of others? Contact us now and get your delivery at the very doorstep and pickup as well!</li>
  
  <ol>


  Zoom in and ahead with care Transportation of your Motorcycle from one place to the other might seem a big task if someone says minor scratches are possible or railways would be used for the task, but Daak Gaadi is different. With air, road and water transportation services to keep you and your Bike moving, we ensure that we transport your car in the very exact way you expect it to be and render it the same care and safety which you might be providing to your otherwise priced possession.

With a provision of specialised covered car trailers to transport your car to your desired destination, our trailers and containerized carriages are specially designed for this purpose. We are dedicated and stubborn to offer you a personalized car relocation service at reasonable costs and assure you of any non-damages.

Just tell us about the pickup and drop locations, along with some additional information about your passionate vehicle to help us handle it better. Bike handling experts at Daak Gaadi will 

ensure that you’re constantly connected with the concerned driver and to them as well to ensure timely pickup and delivery at the desired location without you much waiting.

What special you get at Daak Gaadi Bike Logistics?
<ol>
<li>Sensible prices for transportation to not be too heavy on your pocket</li>
<li>Alarm system and antennas are installed to help you keep track of Bike transportation</li>
<li>Personal handling like our own possession</li>
<li>Careful inspection to check for any leakage and removal of accessories</li>

</ol>
`
showFullText4=false;
shortText4=` Car Transportation

Zoom and vroom around with caution Whether a two wheeler or a four wheeler, one’s vehicle is their priced possession.`;
fullText4=`the most preserved possession as well. Daak Gaadi is backed by a team of automotive transportation experts who know and understand how to handle your bikes with utmost safety and care without compromising on its state. Because unlike car, bikes are smaller in size and thus need special locking mechanism to keep them in place. While looking out for bike transportation logistics service at Daak Gaadi, you’ll be given an option whether to opt for open or closed carriages to transport your bike to the desired destination. And based on the model and your choice, a definite and all prices inclusive, budget-friendly logistics plan will be offered to you.

You can even compare the prices with other logistics company and will surely will be impressed by what we have to offer as our services are at par with what we charge you for moving your bike from one place to other.

Benefits of choosing Daak Gaadi over others: -

<ol>
<li>24*7 transportation services available</li>
<li>Tracking mechanism for the entire transit operation</li>
<li>Availability of both open and closed carriages as per the demand
</li>
<li>Damage free and supervised packaging and loading irrespective of destination and source</li>
<li>Lastly, pricing that is both cost-effective and within reason Ready to join the bandwagon with thousands and lakhs of others? Contact us now and get your delivery at the very doorstep and pickup as well!</li>
</ol>

Zoom in and ahead with care Transportation of your car from one place to the other might seem a big task if someone says minor scratches are possible or railways would be used for the task, but Daak Gaadi is different. With air, road and water transportation services to keep you and your car moving, we ensure that we transport your car in the very exact way you expect it to be and render it the same care and safety which you might be providing to your otherwise priced possession.

With a provision of specialised covered car trailers to transport your car to your desired destination, our trailers and containerized carriages are specially designed for this purpose. We are dedicated and stubborn to offer you a personalized car relocation service at reasonable costs and assure you of any non-damages.

Just tell us about the pickup and drop locations, along with some additional information about your passionate vehicle to help us handle it better. Car handling experts at Daak Gaadi will ensure that you’re constantly connected with the concerned driver and to them as well to ensure timely pickup and delivery at the desired location without you much waiting.

What special you get at Daak Gaadi Logistics?

<ol>
<li>Sensible prices for transportation to not be too heavy on your pocket</li>
<li>Alarm system and antennas are installed to help you keep track of car transportation</li>
<li>Personal handling like our own possession</li>
<li>Careful inspection to check for any leakage and removal of accessories</li>

</ol>
`


showFullText5=false;
shortText5=`our might be House or Office shifting out of your district, city or state to another district, city or state`
fullText5=`even maybe within your current area as well. It could be a personal relocation or even professional, temporary or permanent, with or without family. But this doesn’t come way of us extending our Movers and Packers Company helping hand to make relocation easy and smooth.

Though shifting in your own country is always feasible and smooth but not when you don’t have an idea as to how you should proceed. Daak Gaadi will handle all of that added hassle on your behalf. Just give us a call, tell us your current location and destination and voila! You’ll be sorted. Beginning from curating a custom and comprehensive relocation plan to packing everything, then the entire transit and finally unpacking at the destination, we’ll handle it all for you. Our packers and movers, relocation coordinators and drivers will drive you through a smooth transit journey.

Our services include the following:

<ol>
<li>A customised, personalised and fully-comprehended transit plan to give you an overview of the entire process</li>
<li>Direct coordination with people involved</li>
<li>Real time tracking mechanism to know in and out of the entire journey</li>
<li>Careful handling of assets. No damages. Weather proof packing.</li>
<li>Last but surely not the least, 24*7 logistics facility. On-demand, on-time and reliable</li>
</ol>

Home Relocation Service: Packers and Movers, Movers and Packers, Packing And Moving, Office Moving and Shifting, Packers Movers, 
Our packers and movers, relocation coordinators and drivers will drive you through a smooth transit journey.
Our services include the following:

<ol>
<li>A customised, personalised and fully-comprehended transit plan to give you an overview of the entire process</li>
<li>Direct coordination with people involved</li>
<li>Real time tracking mechanism to know in and out of the entire journey</li>
<li>Careful handling of assets. No damages. Weather proof packing.</li>
<li>Last but surely not the least, 24*7 logistics facility. On- demand, on-time and reliable Local relocation cannot be so easy without DAAK GAADI and its services!</li>
<ol>

Help us shift you safely Packing everything from your old house for your new home might be both daunting and exciting at the same time, but becomes much of a hassle-free task when expert hands come into play. With a freight of air, road and water services at your disposal for a smooth relocation process anywhere in the world, we at Daak Gaadi are truly and completely dedicated to make it possible for you.
Whether it’s your expensive dining table, huge master beds, delicate crockery, that wired IT setup or even a part of your modular kitchen; we’ll pack it, move it and unpack again for you like you never even shifted your home! With a 24 hour roundabout service, unqiue arrangement of space for all domestic and international carriers, a variety of modes for transportation coupled with Sunday and holiday services as well, Daak Gaadi is your one stop and go-to solution for eveything household logistics.
Things that don’t go wrong when hiring DAAK GAADI for your household moving logistics any time: -

<ol>
<li>Exceeding budget: We provide you with a comprehensive and easy-to-lie-within relocation budget which will be competitive when compared with others but also light on pocket</li>
<li>Damaged items: Our relocation experts, packers and movers will handle each and every item of yours like theirs with full- proof packing and added shields to not damage anything</li>
<li>Loss of items: You can keep a track of the entire moving process and item packaging to not lose out on anything</li>
<li>Partial services: Wrong companies guide you the worse but DAAK GAADI doesn’t. Complete range of services for you to move around “Journey towards a new beginning ahead”</li>

</ol>

Office Shifting Services
Daak Gaadi Provided Office Shifting Services in Gurgaon. We are known for providing safe and timely office moving and packing services in Gurgaon. The professional assistant of our office relocation in Gurgaon shifting the office material from the old office to the new office by packing and moving the office in a planned way saves the owner of the office from risky steps, because shifting the office by itself is a risk A stuffy move can be like a waste of time, waste of expensive office items and ruin itself, so it is right to hire a professional Packers & Movers company for office packing and moving.
We are here to move your business miles ahead

Disassembling and then reassembling one’s office assets might be a task for some, but could be a nightmare for others. Office or corporate shiftings are never easy but not with Daak Gaadi.

With extra care, added precision and supreme quality when relocating your office from source to destination, Daak Gaadi makes itself and everyone involved in the relocation process accountable to you, at every step of the movement. Beginning from creating an office relocation project plan to planning how to move your office things till even disposing off anything and everything that’s not needed at your new office space, we take care of it all. Amidst this planning, key attention is given on how to handle IT equipments with complete safety and care to not dismantle anything that could add up to the cost of relocation.

When you choose Daak Gaadi for office relocation services, you get below services without any faults:
<ol>
<li>Packing and unpacking of office contents from and to the desired locations</li>
<li>“Handle with care” approach for delicate items while still handling non-delicate items with equal safety
</li>
<li>Skilled office furniture packers and movers for disassembling and assembling modular furniture
</li>
<li>IT equipment handling experts for everything technical- whether wired or not</li>
<li>Lastly, allotment of a dedicated packer and mover coordinator for single point contact</li>
<ol>

Set up your brand new office in no time, just like the original one but in new surroundings under expert guidance. “Moving made easy”

`



showFullText6=false;
shortText6=`Daak Gaadi is storage & Warehouse service provider to stow all your household and comercial items with state of the art security facilities, Catering exclusive cheap storage`
fullText6=`Daak Gaadi is storage & Warehouse service provider to stow all your household and comercial items with state of the art security facilities, Catering exclusive cheap storage solutions ranging from Household items storage to Records storage management. We are a one-stop destination for all your warehouse and storage needs. If you are traveling, renovating your house, running out of space or looking for storage units or storage spaces for rent for your households and automobiles, self-storage near me.You will find a storage warehouse for rent in Gurgaon, Delhi, Noida, Ghaziabad, Faridabad, Jaipur, and Ahmedabad at the Lowest price.
`

  fullname: string;
  email: string;
  message: string;

  categories;
  user;
  currUserId;
  cart = [];
  products = [];
  products2 = [];
  products3 = [];
  products4 = [];
  products5 = [];


  wishlist = [];

  showSearchedProducts: Products[] = [];
  showSearchedProductBool: boolean = false;
  
  constructor(private productService: ProductService, 
    public loaderService: LoaderService, 
    private snackbar: MatSnackBar,
     private router: Router, 
     private dialog: MatDialog,
     public authService: AuthenticationService, 
     private http: HttpClient, 
     private route: ActivatedRoute) {

      let sid= localStorage.getItem("viaanMartUser");
      if(sid!=null){
        this.router.navigateByUrl('/user-dashboard/my-orders');

      }
     }

  ngOnInit(): void {
    this.getCategories();
    localStorage.removeItem('buyNowProd');
    if(localStorage.getItem('viaanMartUser')){
      if(!localStorage.getItem('count')){
        let count = 1;
        localStorage.setItem('count', JSON.stringify(count));
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['./'], {
          relativeTo: this.route
        })
      }
      this.getCartItems();
      this.getWishlist();
    }
    else{
      this.getProducts();
    }
  }


  getCartItems(){
    this.user = JSON.parse(localStorage.getItem('viaanMartUser'));
    this.productService.getCart().subscribe(res=>{
      this.cart = res;
      console.log(res);
      this.getProducts();
    })
  }

 

  sendMessage(): void {

    const emailInput = document.getElementById('email') as HTMLInputElement;
    const fullnameInput = document.getElementById('fullname') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLInputElement;
    
      
    
    
        // Send the estimate data to the server to store in MongoDB
        const estimateData = {
          fullname:this.fullname,
          message:this.message,
  // Use value property to get the input value
  email: this.email,// Use value property to get the input value
       
        };
    
        this.http.post<any>('https://logistwork.onrender.com/api/contact', estimateData).subscribe(
          (response: any) => {
            alert("successfully Generated Estimate");
           
            
          // Log the generated estimateId to check its value
  
          // Prepare the email text
         
          },
          (error) => {
            alert("Error in Generating the Estimate")
            console.error('Error calculating estimate:', error);
          }
        );
      }
  addProduct(id){
    const dialogRef = this.dialog.open(SubscriptiondialogComponent, {
    
      width: "30%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        this.getProducts();
      }
    });
  }

  increaseQty(id){
    console.log(id);
    let cart: Cart[] = this.cart.filter((p)=> p.pid === id);
    let body = {}
    console.log(cart[0]);
    body = { quantity: cart[0].quantity + 1 };
    this.productService.updateProductQuantityInCart(cart[0]._id, body).subscribe(res=>{
      console.log(res);
      this.showNotification(
        'snackbar',
        `Quntity Updated...!!!`,
        'bottom',
        'center'
      )
      this.getCartItems();
      this.productService.refreshCartAfterPlace.next(true);
    })
  }

  decreaseQty(id){
    console.log(id);
    let cart: Cart[] = this.cart.filter((p)=> p.pid === id);
    let body = {}
    console.log(cart[0]);
    if(cart[0].quantity === 1){
      console.log(cart[0]);
      id = { id: cart[0]._id };
      this.productService.removeProductFromCart(id).subscribe(res=>{
        console.log(res);
        this.showNotification(
          'snackbar-danger',
          `Item Removed from Cart...!!!`,
          'bottom',
          'center'
        )
        this.getCartItems();
        this.productService.refreshCartAfterPlace.next(true);
      })
    }
    else if(cart[0].quantity > 1){
      body = { quantity: cart[0].quantity - 1 };
      this.productService.updateProductQuantityInCart(cart[0]._id, body).subscribe(res=>{
        console.log(res);
        this.showNotification(
          'snackbar',
          `Quntity Updated...!!!`,
          'bottom',
          'center'
        )
        this.getCartItems();
      })
    }
  }

  getProducts() {
    this.products = [];
    this.products2 = [];
    this.products3 = [];
    this.products4 = [];
    this.products5 = [];

    this.productService.getProducts().subscribe((res) => {
      
      for(let i=0;i<res.length;i++){

        if(i<5){
          this.products.push(res[i]);
        }else{
          if(i<10){
            this.products2.push(res[i]);
            
          }else{
            if(i<15){
              this.products3.push(res[i]);
            }else{
              if(i<20){
                this.products4.push(res[i]);
              }else{
                if(i<25){
                  this.products5.push(res[i]);
                }else{
        
                }
              }
            }
          }
        }
        
       

      }

    
      this.products.forEach(prod=>{
        prod.qty = 0;
      })
      if(localStorage.getItem('viaanMartUser')){
        this.cart.forEach(item=>{
          this.products.forEach(prod=>{
            if(prod._id === item.pid){
              prod.qty = item.quantity;
            }
          })
        })
      }
      console.log(this.products);
    });
  }

  getWishlist(){
    this.productService.getWishlist().subscribe((res: Wishlist[])=>{
      console.log(res);
      this.wishlist = res.map(x => x.pid);
      console.log(this.wishlist);
    })
  }

  addToWishlist(pid){
    if(localStorage.getItem('viaanMartUser')){
      let data = { cid: this.user._id, pid: pid }
      this.productService.addToWishlist(data).subscribe(res=>{
        this.showNotification(
          'snackbar-success',
          `Added To Wishlist...!!!`,
          'bottom',
          'center'
        )
        this.getWishlist();
        this.productService.refreshWishlist.next(true);
      })
    }

    else if(localStorage.getItem('guest')){
      if(confirm("You need to Sign-up/Login First")){
        this.router.navigateByUrl('sign-in');
      }
    }
  }

  removeFromWishlist(pid){
    this.productService.getWishlist().subscribe((res: Wishlist[])=> {
      let product = res.find(x => x.pid === pid);
      let id = { id: product._id };
      this.productService.removeFromWishlist(id).subscribe(res=>{
        this.showNotification(
          'snackbar-danger',
          `Removed From Wishlist...!!!`,
          'bottom',
          'center'
        )
        this.getWishlist();
        this.productService.refreshWishlist.next(true);
      })
    })
  }

  getCategories(){
    this.productService.getCategories().subscribe(res=>{
      console.log(res);
      this.categories = res;
    })
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackbar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
}
