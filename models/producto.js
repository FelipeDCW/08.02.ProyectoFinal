const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const DetalleOrden = require("./detalleOrden");

const Producto = sequelize.define('Producto',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    codigo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    precioUnitario:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    
},{
    tableName:'productos',
    timestamps: false,
    underscored: true
})

Producto.hasMany(DetalleOrden,{
    foreignKey: 'id_producto'
})
DetalleOrden.belongsTo(Producto,{
    foreignKey: 'id_producto'
})

module.exports = Producto

