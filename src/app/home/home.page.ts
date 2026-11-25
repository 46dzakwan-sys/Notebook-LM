import { Component } from '@angular/core';
import {
  AlertController,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
  ],
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  async tampilkanPesan(judul: string) {
    const alert = await this.alertController.create({
      header: 'Sukses',
      message: 'Notebook berhasil dibuat: ' + judul,
      buttons: ['OK']
    });
    await alert.present();
  }

  async buatNotebook() {
    const alert = await this.alertController.create({
      header: 'Notebook Baru',
      inputs: [
        {
          name: 'judul',
          type: 'text',
          placeholder: 'Masukkan judul notebook'
        }
      ],
      buttons: [
        'Batal',
        {
          text: 'Simpan',
          handler: (data) => {
            this.tampilkanPesan(data.judul);
          }
        }
      ]
    });
    await alert.present();
  }

  async uploadPDF() {
    const alert = await this.alertController.create({
      header: 'Upload PDF',
      message: 'Fitur pemilihan dokumen PDF akan dikembangkan.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async bukaChat() {
    const alert = await this.alertController.create({
      header: 'AI Chat',
      message: 'Fitur AI Chat akan dikembangkan.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
