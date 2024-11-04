/* const Cliente = require("./models/cliente");
const Empleado = require("./models/empleado");
const Orden = require("./models/orden");
const Producto = require("./models/producto");
const Usuario = require("./models/usuario");


const llenadoOrden = ()=> {
    for (let i = 0; i< 10; i++){
        for (let j = 0; j < 10; j++){
            Orden.create(
                {
                    codigo: `${i}${j}`,
                    fechaEmision: `2024-11-04`,
                    fechaEntrega: `2024-11-04`,
                    id_empleado: i + 1,
                    id_cliente: j + 1                    
                }
            )
    
        }
        
    }
}

const llenadoProducto = ()=> {
    for (let i = 0; i< 10; i++){
            Usuario.create(
                {
                    nombreUsuario: `${i}`,
                    correo: `correo${i}@correo.cl `,
                    clave: '123456',
                    estado: true,
                    rol: 'ROLE_USER'
                }
            )
    
        
    }
}


llenadoProducto() */

const { findAllClientes, findByClientes, createCliente, updateCliente, deleteByIdCliente } = require("./service/cliente");

/* findAllClientes().then((datos)=>{
    console.log(datos);
}).catch()

findByClientes(7).then((datos)=>{
    console.log(datos);
}).catch((error)=>{
    console.log(error);
})

createCliente('21550686-K','Julian', 'mi casa', 'felipe@felipe','1111111').then((datos)=>{
    console.log(datos);
}).catch()
 */
updateCliente('12','21550686-K','Julian actualizado', 'mi casa actualizado', 'felipe@felipe','1111111').then((datos)=>{
    console.log(datos);
}).catch()

deleteByIdCliente(12).then((datos)=>{
    console.log(datos);
})