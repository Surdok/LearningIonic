import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import firebase, { firestore } from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  items: Array<{title: string, message: string}>;
  Item = {};
  
  //db = firebase.firestore();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
let db = firebase.firestore();

this.items = [];
db.collection("Todo List").onSnapshot(function(querySnapshot){
  querySnapshot.docChanges.forEach(function(change){
                 if(change.type=="added"){
                   console.log(change);
                 }else if(change.type == "modified"){//modified

                 }else if(change.type == "removed"){//removed


                 }
 });
 console.log(this.items); // <--
});

  // db.collection("Todo List")
  //   .get()
  //   .then(function(querySnapshot) {
  //       querySnapshot.forEach(function(doc) {
  //         //this.items = [];
  //           console.log(doc.id, " => ", doc.data());

  //           // this.items.push({
  //           //   title: doc.data().Title,
  //           //   message: doc.data().Message
  //           // });

  //           // console.log(this.items);
            
  //       });

  //   })
  //   .catch(function(error) {
  //       console.log("Error getting documents: ", error);
  //   });

    
  }

  AddItem(I){
    console.log('Testing firebase..');
    console.log(I);
    let db = firebase.firestore();
    // Add a new document with a generated id.
db.collection("Todo List").add({
  Message: I.message,
  Title: I.title
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

  }
}
