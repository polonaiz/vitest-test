import { test } from 'vitest'

import { DataSource } from "typeorm"
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { Account } from './account'

test('typeorm', async () => {
    const dataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "test",
        password: "test",
        database: "test",
        entities: [
            Account
        ],
        namingStrategy: new SnakeNamingStrategy(),
    })
    console.log(dataSource)
})
