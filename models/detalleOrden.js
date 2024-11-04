const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const DetalleOrden = sequelize.define('DetalleOrden',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    codigo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
},{
    tableName:'detalle_orden',
    timestamps: false
})

module.exports = DetalleOrden

