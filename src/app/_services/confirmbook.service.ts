import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookconfirmService {

    constructor(private http: HttpClient) {}

  

  private apiUrl = 'https://inspiring-being-405110.el.r.appspot.com/api/mail/sendmail/second/booking'; // Replace with your API URL

      
    
      sendEmail(email:string,subject: string, message:string, ) {
        const data = {email, subject,message};
        return this.http.post(this.apiUrl, data);
      }
  
}
