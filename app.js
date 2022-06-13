// const vehiculo = prompt("Ingrese su vehiculo a vender")
// const valor = Number( prompt("Ingrese el monto de su valor") )


// let interes


// switch (vehiculo) {

//     case "Peugeot":
//         interes = 1.12
//         break
//     case "Fiat":
//         interes = 1.25
//         break
//     case "Audi":
//         interes = 1.90
//         break
//     case "Jeep":
//         interes = 2.40
//         break
//     default:
//         alert("No ingresaste un vehiculo válido")
// }

// alert("Tu monto a devolver a la consecionaria "+ vehiculo + " es de " + valor * interes)


const vehiculo = prompt("Ingrese su vehiculo a vender")
const valor = Number( prompt("Ingrese el valor de su vehiculo") )


let descuento = ""


switch (vehiculo) {

    case "Peugote":
        descuento = 10
        break
    case "Fiat":
        descuento = 15
        break
    case "Audi":
        descuento = 20
        break
    case "Jeep":
        descuento = 5
        break
    case "Chevrolet":
        descuento = 25
        break
    case "Ford":
        descuento = 30
        break
    default:
        alert("No ingresaste un vehiculo válido")
}

alert("Tu descuento actual para tu vehiculo " + vehiculo + " es de " + valor * descuento /100)