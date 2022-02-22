<template>
    <div>
       <vue-erdjs-connect :qrcode-handler="qrcodeHandler"></vue-erdjs-connect>
    </div>
</template>

<script lang="ts">
import CustomQRCodeHandler from "../elrond/maiar/CustomQRCodeHandler";

export default {
    name: 'Login',
    data: () => ({
        qrcodeHandler: new CustomQRCodeHandler(),
    })
}
</script>