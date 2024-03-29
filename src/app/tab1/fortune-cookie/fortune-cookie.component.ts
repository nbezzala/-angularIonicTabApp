import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FortuneCookieService } from './fortune-cookie.service';

@Component({
  selector: 'app-fortune-cookie',
  styleUrls: ['./fortune-cookie.component.css'],
  templateUrl: './fortune-cookie.component.html',
})
export class FortuneCookieComponent implements OnInit {
  constructor(
    public loadingController: LoadingController,
    private fortuneCookieService: FortuneCookieService
  ) {}

  ngOnInit() {}

  fortune: String;

  hideFortune() {
    this.fortune = '';
  }

  async showFortune() {
    this.fortune = '';
    const loading = await this.loadingController.create({
      message: 'Fetching your fortune...',
      spinner: 'lines',
    });
    await loading.present();

    let fortune = this.fortuneCookieService.getFortune().subscribe({
      next: fortune => { 
        this.fortune = fortune[0].text;
    }, error: e => {
      console.error(e)
    },
    complete: () => loading.dismiss()
  })
    
  }
}
