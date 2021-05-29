const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}
const opcoes = {
    freezeTableName: true,
    tableName: 'Fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtulizacao',
    version: 'versao'
}


module.exports = instancia.define('fornecedor', colunas, opcoes)