import qrcodeOptions from './qrcode-style';
import QRCodeStyling from 'qr-code-styling';
import { IQRCodeHandler } from 'vue-erdjs';

class CustomQRCodeHandler implements IQRCodeHandler {
    private qrcode = new QRCodeStyling(Object.assign(qrcodeOptions));

    handle(data: string, element: HTMLElement): Promise<any> {
        qrcodeOptions.data = data;
        this.qrcode.update(Object.assign(qrcodeOptions));
        this.qrcode.append(element);
        return Promise.resolve(undefined);
    }

}

export default CustomQRCodeHandler;
