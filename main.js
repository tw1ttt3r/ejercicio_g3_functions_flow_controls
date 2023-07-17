function msgError(error) {
  switch(error) {
    case 1:
      return "Se debe acudir a oficinas para crear su cuenta, disculpe las molestias";
      break;
    case 2:
      return "El usuario no cumple las especificaciones";
      break;
    case 3:
      return "La cantidad introducida no es la indicada";
      break;
    case 4:
      return "La contraseña no cumple las especificaciones";
      break;
    case 5:
      return "Servicio no renocido";
      break;
  }
}

function msgUser(msg) {
  switch(error) {
    case 1:
      return `Bienvenido a nuestra plataforma de pagos:
      Que desea hacer:
        1) Iniciar Sesión
        2) Crear cuenta
        
      Opcion: `;
       break;
    case 2:
      return `Usuario: `;
       break;
    case 3:
      return "Servicio pagado exitosamente";
      break;
  }
}

function validacionesDatos(step, data, valido = null, price = 0) {
  switch(step) {
    case 1:
      return data && data.length >= 6
      break;
    case 2:
      return data && data.length >= 8
      break;
    case 3:
      return valido && data && data.length >= 10
      break;
    case 4:
      return data && !isNaN(data) && Number(data) === price
      break;
  }
}

function main() {
  let newService = "s";
  do {
    const opcion = prompt(msgUser(1));
    if (Number(opcion) === 1) {
      const usuario = prompt(msgUser(2));
      if(validacionesDatos(1, usuario)) {
        const contrasena = prompt(`Usuario: ${usuario}
          Contraseña: `);
          if (validacionesDatos(2, contrasena)) {
            let noCuenta = "";
            let valido = true;
            const menu = prompt(`Usuario: ${usuario}
              Servicios: 
                1) CFE
                2) Telmex
                3) AT&T
                4) Telcel
                5) Gas
                6) Agua
                
                Opcion: `);
                
                switch(menu) {
                  case "1":
                    noCuenta = prompt(`Usuario: ${usuario}
                      Servicio: CFE 
                      Número de Cuenta:`);
                    break;               
                  case "2":
                    noCuenta = prompt(`Usuario: ${usuario}
                      Servicio: Telmex 
                      Número de Cuenta:`);
                    break;               
                  case "3":
                    noCuenta = prompt(`Usuario: ${usuario}
                      Servicio: AT&T 
                      Número de Cuenta:`);
                    break;               
                  case "4":
                    noCuenta = prompt(`Usuario: ${usuario}
                      Servicio: Telcel 
                      Número de Cuenta:`);
                    break;               
                  case "5":
                    noCuenta = prompt(`Usuario: ${usuario}
                      Servicio: Gas 
                      Número de Cuenta:`);
                    break;               
                  case "6":
                    noCuenta = prompt(`Usuario: ${usuario}
                      Servicio: Agua 
                      Número de Cuenta:`);
                    break;               
                  default:
                    valido = false;
                    console.error(msgError(5))
                }
                if(validacionesDatos(3, contrasena, valido)) {
                  let cantidadPago = "";
                  let price = 0;
                  switch(menu) {
                    case "1":
                      price = 250;
                      cantidadPago = prompt(`Usuario: ${usuario}
                        Servicio: CFE 
                        Número de Cuenta: $250.00
                        
                        Cantidad a pagar: `);
                      break;               
                    case "2":
                      price = 300;
                      cantidadPago = prompt(`Usuario: ${usuario}
                        Servicio: Telmex 
                        Número de Cuenta: ${noCuenta}
                        El monto a pagar es: $300.00
                        
                        Cantidad a pagar: `);
                      break;               
                    case "3":
                      price = 450;
                      cantidadPago = prompt(`Usuario: ${usuario}
                        Servicio: AT&T 
                        Número de Cuenta: ${noCuenta}
                        El monto a pagar es: $450.00
                        
                        Cantidad a pagar: `);
                      break;               
                    case "4":
                      price = 300;
                      cantidadPago = prompt(`Usuario: ${usuario}
                        Servicio: Telcel 
                        Número de Cuenta: ${noCuenta}
                        El monto a pagar es: $300.00
                        
                        Cantidad a pagar: `);
                      break;               
                    case "5":
                      price = 500;
                      cantidadPago = prompt(`Usuario: ${usuario}
                        Servicio: Gas 
                        Número de Cuenta: ${noCuenta}
                        El monto a pagar es: $500.00
                        
                        Cantidad a pagar: `);
                      break;               
                    case "6":
                      price = 365;
                      cantidadPago = prompt(`Usuario: ${usuario}
                        Servicio: Agua 
                        Número de Cuenta: ${noCuenta}
                        El monto a pagar es: $365.00
                        
                        Cantidad a pagar: `);
                      break;
                  }
                  
                  if (validacionesDatos(4, cantidadPago, null, price)) {
                    newService = prompt(`Usuario: ${usuario}
                      Desea pagar otro servicio: s/n: `);
                  } else {
                    console.error(msgError(3));
                  }
                }
          } else {
            console.error(msgError(4));
          }
      } else {
        console.error(msgError(2));
      }
    } else {
      alert(msgError(1));
    }
  } while(newService === "s")
}