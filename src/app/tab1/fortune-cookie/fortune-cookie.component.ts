import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-fortune-cookie',
  styleUrls: ['./fortune-cookie.component.css'],
  templateUrl: './fortune-cookie.component.html',
})
export class FortuneCookieComponent implements OnInit {
  constructor(public loadingController: LoadingController) {}

  ngOnInit() {}

  async showFortune() {
    const loading = await this.loadingController.create({
      duration: 3000,
      message: 'please wait',
      spinner: 'dots',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    alert('Your fortune is sweet ' + role + ' ' + data);
  }
}
