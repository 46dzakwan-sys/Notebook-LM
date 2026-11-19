
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {

  constructor(
    private alertController: AlertController
  ) {}

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
            alertControllerMessage(data.judul);
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

function alertControllerMessage(judul: string) {
  alert('Notebook berhasil dibuat: ' + judul);
}

