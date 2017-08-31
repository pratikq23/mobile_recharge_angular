import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive = false;
    showMenu = '';
    showMenuCompany = '';
    showMenuModel = '';
    showMenuColor = '';
    showMenuBill = '';
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    addExpandClassCompany(element: any) {
        if (element === this.showMenuCompany) {
            this.showMenuCompany = '0';
        } else {
            this.showMenuCompany = element;
        }
    }

    addExpandClassModel(element: any) {
        if (element === this.showMenuModel) {
            this.showMenuModel = '0';
        } else {
            this.showMenuModel = element;
        }
    }

     addExpandClassColor(element: any) {
        if (element === this.showMenuColor) {
            this.showMenuColor = '0';
        } else {
            this.showMenuColor = element;
        }
    }


    addExpandClassBill(element: any) {
        if (element === this.showMenuBill) {
            this.showMenuBill = '0';
        } else {
            this.showMenuBill = element;
        }
    }
}
