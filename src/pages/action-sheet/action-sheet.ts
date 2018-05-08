import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html'
})
export class ActionSheetPage {
  NavigatedFrom: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
  ) {
    //this.NavigatedFrom = navParams.get('npage');

  }

  presentActionSheet() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      //subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            alert.setTitle("Destructive");
            alert.setMessage("Destructive has been clicked!");
            alert.present();
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            alert.setTitle("Archieving");
            alert.setMessage("Archive has been clicked!");
            alert.present();
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert.setTitle("Cancelled");
            alert.setMessage("Cancelation has been clicked!");
            alert.present();
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
