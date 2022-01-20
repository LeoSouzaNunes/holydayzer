import express from 'express'
import cors from 'cors'
import { holidays, holidaysName, today } from './data/data.js'

const server = express()

function isTodayHoliday() {
    for (let i = 0; i < holidays.length; i++) {
        const holiday = holidays[i]

        if (holiday.date === today) {

            holidaysName = holiday.name
            return true
        }

    }
    return false
}

function handleGet(route, data) {
    server.get(route, (request, response) => {

        const monthNumber = request.params.month

        if (Number(monthNumber) >= 1 && Number(monthNumber) <= 12) {
            let holidaysMonth = []

            for (let i = 0; i < holidays.length; i++) {
                const holiday = holidays[i]
                const arrayMonthNumber = holiday.date.replace('/', ' ').split(' ')

                if (arrayMonthNumber[0] === monthNumber) {
                    holidaysMonth.push(holiday)
                }

            }

            const checkHolidays = holidaysMonth.length === 0 ? ('Esse mês não possui feriados') : (holidaysMonth)
            response.send(checkHolidays)
            return
        }

        response.send(data)
    })
}

const message = (isTodayHoliday() ? (`Sim, hoje é ${holidaysName}`) : (`Não, hoje não é feriado`))

server.use(cors())

handleGet('/holidays/:month', holidays)
handleGet('/holidays/', holidays)
handleGet('/is-today-holiday', message)

server.listen(3000, () => console.log('Rodando em http://localhost:3000'))
