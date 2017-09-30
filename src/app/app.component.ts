import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {FormBuilder,FormGroup,Validator} from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    rForm: FormGroup;
    post: any;
    description:string='';
    name: string='';
    constructor(private translate: TranslateService,private fb:FormBuilder) {
        translate.addLangs(['en', 'fr', 'ur', 'es', 'fa']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|es|fa/) ? browserLang : 'en');
        this.rForm=fb.group({
            
        })
    }

   
}
