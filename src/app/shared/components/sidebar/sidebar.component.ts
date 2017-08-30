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
}
