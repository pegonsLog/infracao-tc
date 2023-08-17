import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import {
  getFirestore,
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  addDoc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Infringement } from '../shared/models/infringement';

@Injectable({
  providedIn: 'root',
})
export class InfringementService {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  infringements: Infringement[] = [];
  infringement: Infringement = {
    id: '',
    code: 0,
    description: '',
    penalty: '',
    point: 0,
    fines: '',
  };

  constructor(private firestore: Firestore) {}

  list() {
    let $infringementRef = collection(this.firestore, 'infringements');
    return collectionData($infringementRef, { idField: 'id' }) as Observable<
      Infringement[]
    >;
  }

  findOne(id: string) {
    let $infringementRef = doc(this.db, 'infringements/' + id);
    return docData($infringementRef, {
      idField: 'id',
    }) as Observable<Infringement>;
  }

  delete(id: string) {
    let $infringementRef = doc(this.db, 'infringements/' + id);
    return deleteDoc($infringementRef);
  }

  employeeAdd(infringement: Infringement) {
    let $infringementRef = collection(this.db, 'infringements');
    return addDoc($infringementRef, infringement);
  }

  update(infringement: Infringement, id: string) {
    let $infringementRef = doc(this.db, 'infringements/' + id);
    return setDoc($infringementRef, infringement);
  }
}
