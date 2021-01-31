import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ToastarService {

    constructor(private toastr: ToastrService) { }

    success(message) {
        this.toastr.success(message)
    }

    error(message) {
        this.toastr.error(message)
    }

    info(message) {
        this.toastr.info(message)
    }

    warning(message) {
        this.toastr.warning(message)
    }

}