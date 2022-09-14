// const url = `https://azure.microsoft.com/${navigator.language}/`
document.querySelector('html').lang = navigator.language

let title = `tu escribiste esto
                    ↓`
const app = new Vue({
    el:"#root",
    data() {
        return { 
            text:''
        }
    },
    methods: {
        async changeText () {
            this.text === '' ? await warningAlert('no se a escrito nada','advertencia') : await infoAlert(this.text,title)
            this.text = ''
        }
    }
});