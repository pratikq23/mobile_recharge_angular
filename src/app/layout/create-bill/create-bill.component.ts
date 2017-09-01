import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router }  from '@angular/router';


@Component({
    selector: 'create-bill-page',
    templateUrl: './create-bill.component.html',
    styleUrls: ['./create-bill.component.scss']
})
export class CreateBillComponent  {
    title = 'app works!';
    public mobilemodelviewForm: FormGroup;
    public companyList:any;
    public modelList:any;
    public colorList:any;

    constructor(private fb: FormBuilder,
    public router:Router) 
    {
        this.companyList = [{name:'select company'},{name:'samsung'},{name:'nokia'},{name:'moto'}];

        this.createForm();
    }

    createForm() {
        this.mobilemodelviewForm = this.fb.group({ // <-- the parent FormGroup
            companyname: ['select company', Validators.required ],
            model:['select model', Validators.required ],
            color:['select color', Validators.required ],
            serial_no:['',Validators.required],
            imei_no_1:['',Validators.required],
            imei_no_2:['',Validators.required],
            mrp:['',Validators.required],
            purchase_price:['',Validators.required],
            purchase_rate:['',Validators.required],
            tax_perc:['',Validators.required],
        });
    }

    onSubmit() {

        console.log("this.mobilemodelviewForm",this.mobilemodelviewForm);
    }

    valuechange(ev:any) {
        console.log("this.mobilemodelviewForm",this.mobilemodelviewForm);
        this.modelList = [{name:'select model'},{name:'G1'},{name:'G2'},{name:'G3 turbo'}];
    }

    modelValueChange(event:any) {
        this.colorList = [{name:'select color'},{name:'silver'},{name:'Black'},{name:'Black'}];
    }

    colorValueChange(event:any) {
       
    }
}
