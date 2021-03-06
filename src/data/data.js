const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "2/28/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" },
    { date: "12/31/2022", name: "Véspera de ano novo" }
];

let holidaysName = '';

const todayFormat = new Date();
const today = todayFormat.toLocaleDateString()

export {
    holidays,
    holidaysName,
    today
}