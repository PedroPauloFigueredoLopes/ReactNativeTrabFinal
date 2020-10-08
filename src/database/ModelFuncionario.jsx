import * as SQLite from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class Funcionario extends BaseModel {
    constructor(obj) {
        super(obj)
    }

    static get database() {
        return async () => SQLite.openDatabase('database.db')
    }
    static get tableName() {
        return 'funcionario'
    }

    static get columnMapping() {
        return {
            id: { type: types.INTEGER },
            nome: { type: types.TEXT, not_null: true },
            cpf: { type: types.TEXT, not_null: true },
        }
    }
}