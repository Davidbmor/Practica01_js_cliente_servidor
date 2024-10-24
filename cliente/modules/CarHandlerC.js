export class CardHandlerC {

    constructor(url) {
        this._url = url;
        this._lasQueryStatus = null;
    }

    async getAllCarsV2() {
        let b = null;
        await fetch(`${this._url}/`)
            .then(async (datos) => {
              await  datos.json().then((datos) => {
                    this._lasQueryStatus = true;
                    b = datos;
                }, (error) => {
                    this._lasQueryStatus = false;
                    return null;
                })
            }, (error) => {
                this._lasQueryStatus = false;
                return null;
            })
            return b; 
    }
}