const fs = require('fs');

const archivo = './db/datos.json';

const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}


const leerDB = () => {

    let subtitulos;
    let texto;

    if (!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    // subtitulos.push(info);

    subtitulos = JSON.parse(info);

    subtitulos.forEach(element => {

        if (isNaN(element[1])) {

            texto = element[1];

            if (!texto.startsWith('00')) {
                console.log(element[1]);
            }
        }

    });

}

module.exports = {
    guardarDB,
    leerDB
}