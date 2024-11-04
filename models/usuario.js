const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Usuario = sequelize.define('Usuario',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nombreUsuario:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    correo:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    clave:{
        type: DataTypes.STRING,
        allowNull:false
    },
    estado:{
        type: DataTypes.BOOLEAN
    },
    rol:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    tableName:'usuarios',
    timestamps: false,
    underscored: true
})

module.exports = Usuario
