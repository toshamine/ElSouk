import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { annonceServiceService } from 'src/app/services/annonce-service.service';
import { authService } from 'src/app/services/auth.service';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-annonce-add',
  templateUrl: './annonce-add.page.html',
  styleUrls: ['./annonce-add.page.scss'],
})
export class AnnonceAddPage implements OnInit {
  annonce= {title:'',desc:'',price:''}
  loggedUser=this.authService.getLoggedUser();
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  croppedImagepath = "";
  constructor(private annonceService: annonceServiceService,private route: ActivatedRoute,private router: Router
    ,private authService: authService,private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File) { }

  ngOnInit() {
    
  }



  add(annonce: any)
  {
    const editedList=this.annonceService.getList();
    annonce.user=this.loggedUser.username;
    annonce.price=annonce.price.toString();
    annonce.pic='../assets/icon/logo.png';
    annonce.tel=this.loggedUser.tel;
    annonce.date=this.getSimpleDate(new Date());
    annonce.id=Math.floor(Math.random() * 100).toString();
    editedList.unshift(annonce);
    this.annonceService.setList(editedList);
    this.annonceService.notifyList();
    this.router.navigateByUrl('/annonces');
  }


  getSimpleDate(date: Date)
  {
   return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
  }


  pickImage(sourceType) {
    const options: CameraOptions = {
    quality: 100,
    sourceType: sourceType,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
    }
     this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    // Handle error
    });
    }
  
    async selectImage() {
      const actionSheet = await this.actionSheetController.create({
        header: "E5tar Taswira !",
        cssClass:'imageSelect',
        buttons: [{
          text: 'Taswira mel galerie',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Taswira bel camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Batalet !',
          role: 'cancel'
        }
        ]
      });
      await actionSheet.present();
    }
}
