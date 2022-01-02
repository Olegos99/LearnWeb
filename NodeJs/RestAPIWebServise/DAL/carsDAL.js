const jf = require('jsonfile');

const getCarsJSON = () => {
    return new Promise((resolve, reject) => {
        jf.readFile(__dirname + "/../DATA/cars.json", (err, data) => {
            if (err) {
                reject(err)
                console.log("DAL failed");
            } else {
                resolve(data)
                console.log("DAL worked");
            }
        })
    })
}

const setCarsJSON = (obj) => {
    return new Promise((resolve, reject) => {
        jf.writeFile(__dirname + "/../DATA/cars.json", obj, (err) => {
            if (err) {
                reject(err)
                console.log("DAL failed Json NOT updated");
            } else {
                resolve(obj)
                console.log("Json updated sucssesfuly!!!");
            }
        })
    })
}

// getCarsJSON().then(Data => console.log(Data)).catch(err => console.log(err))

module.exports = {
    getCarsJSON,
    setCarsJSON
}