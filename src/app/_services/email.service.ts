import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class EmailService {

    
    
      
    
      constructor(private http: HttpClient) {}

      
    

      private apiUrl = 'https://inspiring-being-405110.el.r.appspot.com/mail/sendmail/first'; // Replace with your API URL

      
    
      sendEmail(email: string, subject: string, message:string ,number:string,selectedproduct:string,length:string,width:string,height:string,actualWeight:string,volumetricWeight:string,rate:string,totalActualWeight:string,totalRate:string,numBoxes:string) {
        const data = { email, subject,message, number,selectedproduct,length,width,height,actualWeight,volumetricWeight,rate,totalActualWeight,totalRate,numBoxes};
        return this.http.post(this.apiUrl, data);
      }


    }
    
    
    

