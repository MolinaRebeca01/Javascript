const vehiculo = prompt("Ingrese su vehiculo a vender")
const valor = Number( prompt("Ingrese el monto de su valor") )


let interes


switch (vehiculo) {

    case "Peugeot":
        interes = 1.12
        break
    case "Fiat":
        interes = 1.25
        break
    case "Audi":
        interes = 1.90
        break
    case "Jeep":
        interes = 2.40
        break
    default:
        alert("No ingresaste un vehiculo válido")
}

alert("Tu monto a devolver a la consecionaria "+ vehiculo + " es de " + valor * interes)