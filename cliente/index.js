async function cliente() {
    await fetch('http://localhost:3000/').then(async (datos) => {
        await datos.json().then((datos) => {
            let firstContainer = document.getElementById('id');
            datos.forEach(element => {
                let newDiv = firstContainer.firstElementChild.cloneNode(true);
                newDiv.appendChild(document.createTextNode(element.saludo));
                newDiv.appendChild(document.createElement('br'));

                firstContainer.appendChild(newDiv);
         

            });
            firstContainer.firstElementChild.remove();
        }, () => { console.log('ERROR') })
    }, (datos) => {
        console.log(datos)
    })
};



console.log('Hola');
cliente();
console.log('Adios');


