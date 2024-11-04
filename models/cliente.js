const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Orden = require("./orden");

const Cliente = sequelize.define('Cliente',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    rut:{
        type: DataTypes.STRING,
        allowNull:false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    direccion:{
        type: DataTypes.STRING,
        allowNull:false
    },
    correo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    tableName: 'clientes',
    timestamps: false
})

Cliente.hasMany(Orden, {
    foreignKey: 'id_cliente'
})
Orden.belongsTo(Cliente,{
    foreignKey: {
        name: 'id_cliente'
    }
})


module.exports=Cliente