import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UtilsService {
  
  constructor(
    public dbFire: AngularFirestore       
    ) { 
      dbFire.firestore.settings( { timestampsInSnapshots: true } )
    }
 
}
