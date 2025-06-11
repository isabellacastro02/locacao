const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const localizacao = sequelize.define('locacoes', {
    loc_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
loc_usu_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'usuarios',
        key: 'usu_id'
    }
},
loc_sala_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'salas',
        key: 'sal_id'
    }
},
loc_data: {
    type: DataTypes.DATEONLY,
    allowNull: false
},
loc_horario: {
    type: DataTypes.TIME,
    allowNull: false
},
loc_duracao: {
    type: DataTypes.INTEGER,
    allowNull: false
},
loc_status: {
    type: DataTypes.ENUM('confirmada', 'cancelada'),
    defaultValue: 'confirmada'
},
loc_motivo: {
    type: DataTypes.STRING(255)
}
});
module.exports = Locacao;