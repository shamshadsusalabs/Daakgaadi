import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rate } from './interface';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  private ratesCollection: AngularFirestoreCollection<Rate>;
  rates: Observable<Rate[]>;
  constructor(private firestore: AngularFirestore) {}

  getRates(): Observable<Rate[]> {
    return this.firestore.collection<Rate>('rates').valueChanges();
  }

  addRate(rateData: Rate): Promise<any> {
    return this.firestore.collection('rates').add({...rateData});
  }

  // updateRate(rateId: string, updatedData: Partial<Rate>): Observable<void> {
  //   return new Observable((observer) => {
  //     const rateDoc = this.ratesCollection.doc(rateId);
  //     rateDoc.update(updatedData).then(
  //       () => {
  //         observer.next();
  //         observer.complete();
  //       },
  //       (error) => {
  //         observer.error(error);
  //       }
  //     );
  //   });
  // }
  updateRate(rateId: string, updatedRate: Rate): void {
    this.ratesCollection.doc(rateId).update(updatedRate);
  }
  deleteRate(rateId: string): Observable<void> {
    return new Observable((observer) => {
      const rateDoc = this.ratesCollection.doc(rateId);
      rateDoc.delete().then(
        () => {
          observer.next();
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  updateRate1(rateId: string, updatedRate: Rate): void {
    this.ratesCollection.doc(rateId).update(updatedRate)
      .then(() => console.log('Rate updated successfully'))
      .catch(error => console.error('Error updating rate:', error));
  }



  
}
