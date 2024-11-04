const Cliente = require("../models/cliente");
const Orden = require("../models/orden");

const findAllClientes = async ()=>{
    try {
        const clientes = await Cliente.findAll({
            include: Orden
        })
        if (clientes.length ==0){
            return{
                msg: 'La tabla clientes se encuentra sin datos',
                status: 204,
                datos: []
            }
        }
        return {
            msg: 'Los datos de la tabla son: ',
            status: 200,
            datos: [clientes.map(cliente=> cliente.toJSON())]
        }
        console.log(clientes.map(cliente=> cliente.toJSON()));
    } catch (error) {
        console.log(error);
        return {
            msg: 'Error en Servidor',
            status: 500,
            datos: []
        }
    }
}

const findByClientes = async (id)=>{
    try {
        const cliente = await Cliente.findOne({
            where:{
                id
            },
            include: Orden
        })
        if(!cliente){
            return{
                msg: `El cliente con el id ${id} no existe` ,
                status: 204,
                datos: []
            }
        }
        return {
            msg: `El cliente con el id ${id} es:`,
            status: 200,
            datos: [cliente.toJSON()]
        }    
    } catch (error) {
        return {
            msg: 'Error en Servidor',
            status: 500,
            datos: []
        }       
    }
}

const createCliente = async (rut, nombre, direccion, correo, telefono)=>{
    try {
        const cliente = await Cliente.create({
            rut, nombre, direccion, correo, telefono
        })
        return {
            msg: `El cliente fue creado con exito`,
            status: 200,
            datos: [cliente.toJSON()]
        }    
        
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en Servidor',
            status: 500,
            datos: []
        }       

    }
}

const updateCliente = async (id, rut, nombre, direccion, correo, telefono) =>{
    try {
        await Cliente.update({id, rut, nombre, direccion, correo, telefono},{
            where: {
                id
            }
        })

        const cliente = await Cliente.findOne({
            where:{
                id
            }
        })
        return {
            msg: `El cliente con id ${id} se actualizó correctamente`,
            status: 200,
            datos: [cliente.toJSON()]
        }
        
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en Servidor',
            status: 500,
            datos: []
        }       
    }

}

const deleteByIdCliente = async (id) => {
    try {
        await Cliente.destroy({
            where: {
                id
            }
        });
        const clientes = await Cliente.findAll();
        return {
            msg: `El cliente con id ${id} se eliminó correctamente`,
            status: 200,
            datos: clientes.map(cliente => cliente.toJSON())
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}


module.exports=
{
    findAllClientes,
    findByClientes,
    createCliente,
    updateCliente,
    deleteByIdCliente

}