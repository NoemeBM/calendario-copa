function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}">
    </li>
    `
    
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>    
    `
}

document.querySelector('#cards').innerHTML = 
        createCard('24/11', 'quinta', createGame('switzerland', '07:00', 'serbia') + 
        createGame('uruguay', '10:00', 'southkorea') +
        createGame('portugal', '13:00', 'ghana') +
        createGame('brazil', '16:00', 'serbia')) +
        
        createCard('25/11', 'sexta', createGame('iran', '07:00', 'wales') + 
        createGame('qatar', '10:00', 'senegal') +
        createGame('netherlands', '13:00', 'ecuador') +
        createGame('england', '16:00', 'unitedstates'))
