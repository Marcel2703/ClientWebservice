import { Injectable } from '@angular/core';
import { ToastType } from '../../model/toast-type';
import { ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Injectable()
export class ToastService {

    public typeToast = new ToastType();

    constructor(
        public toastyService: ToastyService,
        private toastyConfig: ToastyConfig,
    ) {
        this.toastyConfig.theme = 'material';
    }

    showToast(message: string, type: string, title?: string): void {
        const toastOptions: ToastOptions = {
            title: '',
            msg: message ? message : '',
            showClose: true,
            timeout: 10000,
            theme: 'material',
            onAdd: (toast: ToastData) => { },
            onRemove: function(toast: ToastData) { }
        };
        switch (type) {
            case this.typeToast.defaut: this.toastyService.default(toastOptions); break;
            case this.typeToast.info: this.toastyService.info(toastOptions); break;
            case this.typeToast.success: this.toastyService.success(toastOptions); break;
            case this.typeToast.wait: this.toastyService.wait(toastOptions); break;
            case this.typeToast.error: this.toastyService.error(toastOptions); break;
            case this.typeToast.warning: this.toastyService.warning(toastOptions); break;
        }
    }
}
