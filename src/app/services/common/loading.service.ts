import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    counter: number = 0;

    constructor(private spinner: NgxSpinnerService ) { }

    public startLoader() {
        this.spinner.show();
        this.counter += 1;
    }

    public stopLoader() {
        this.counter -= 1;
        if (this.counter == 0)
            this.spinner.hide();
    }

}
