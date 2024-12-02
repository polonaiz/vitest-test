import { test } from 'vitest'
import axios from "axios"

test('axios', async () => {
    const response = await axios.get('https://www.google.com')
    console.log(response)
})