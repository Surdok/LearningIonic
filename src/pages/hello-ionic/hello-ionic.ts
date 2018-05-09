import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Firebase } from '@ionic-native/firebase';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  Item = {};
  
  db = firebase.firestore();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*
    db.collection("cities")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    */
  }

  AddItem(I){
    console.log('Testing firebase..');
    console.log(I);

  }
}
