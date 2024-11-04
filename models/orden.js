const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Producto = require("./producto");
const DetalleOrden = require("./detalleOrden");

const Orden = sequelize.define('Orden',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    codigo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    fechaEmision:{
        type: DataTypes.DATE,
        allowNull:false
    },
    fechaEntrega:{
        type: DataTypes.DATE,
        allowNull:false
    }
},{
    tableName:'ordenes',
    timestamps: false,
    underscored: true
})

Orden.hasMany(DetalleOrden,{
    foreignKey: 'id_orden'
})
DetalleOrden.belongsTo(Orden,{
    foreignKey: 'id_orden'
})

/* Orden.belongsToMany(Producto,{
    through: DetalleOrden,
    foreignKey: 'id_orden'
})
Producto.belongsToMany(Orden, {
    through: DetalleOrden,
    foreignKey: 'id_producto'
})
 */
module.exports = Orden
