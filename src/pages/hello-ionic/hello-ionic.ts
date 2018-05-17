import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import firebase, { firestore } from 'firebase';
import 'firebase/firestore';
import { Title } from '@angular/platform-browser/src/browser/title';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  items: Array<TodoItem>;
  //items: Array<any>;
  Item = {};

  //db = firebase.firestore();
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let db = firebase.firestore();

    this.items = [];

    db.collection("Todo List")
      .get()
      .then((querySnapshot) => {
        // querySnapshot.forEach((doc) => {
        //   var _item = doc.data();
        //   this.items.push(_item);
        // });

        var _items = querySnapshot.docs.map((value) => {
          return {Title: value.data().Title, Message: value.data().Message};
        });

        this.items = _items;

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });


  }

  AddItem(itemToAdd) {

    let db = firebase.firestore();

    db.collection("Todo List").add(itemToAdd)
      .then((docRef) => {
        this.items.push(itemToAdd);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

  }
}

interface TodoItem {
  Title: string;
  Message: string;
}
