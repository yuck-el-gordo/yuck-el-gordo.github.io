document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const goal = document.getElementById('goal');
    const scoreDisplay = document.getElementById('score');
    let score = 0; // Inicializa el contador
    let posX = 285; // Posición inicial X del personaje
    let posY = 185; // Posición inicial Y del personaje
    const speed = 5; // Velocidad de movimiento
    let goalDirection = { x: 1, y: 1 }; // Dirección inicial del movimiento del objetivo
    const goalSpeed = 2; // Velocidad de movimiento del objetivo
    const moveInterval = 50; // Intervalo en milisegundos para mover el objetivo

    function moveGoal() {
        const gameContainer = document.getElementById('game-container');
        const containerRect = gameContainer.getBoundingClientRect();
        let goalX = goal.offsetLeft + goalDirection.x * goalSpeed;
        let goalY = goal.offsetTop + goalDirection.y * goalSpeed;

        // Revertir la dirección si el objetivo alcanza los bordes del contenedor
        if (goalX < 0 || goalX + goal.offsetWidth > containerRect.width) {
            goalDirection.x *= -1;
        }
        if (goalY < 0 || goalY + goal.offsetHeight > containerRect.height) {
            goalDirection.y *= -1;
        }

        // Actualizar la posición del objetivo
        goal.style.left = goalX + 'px';
        goal.style.top = goalY + 'px';
    }

    // Iniciar el movimiento del objetivo
    setInterval(moveGoal, moveInterval);
    
    function moveCharacter(dx, dy) {
        posX += dx * speed;
        posY += dy * speed;
        character.style.left = posX + 'px';
        character.style.top = posY + 'px';
        checkGoal();
    }

    function checkGoal() {
        const rect1 = character.getBoundingClientRect();
        const rect2 = goal.getBoundingClientRect();
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            score++; // Incrementa el contador
            scoreDisplay.innerText = 'Veces Atrapado: ' + score; // Actualiza el texto del contador
            resetGoal(); // Opcional: Mover el objetivo a una nueva posición
        }
    function resetGoal() {
    // Obtener las dimensiones del contenedor del juego
    const gameContainer = document.getElementById('game-container');
    const containerRect = gameContainer.getBoundingClientRect();

    // Calcular nuevas posiciones aleatorias dentro del contenedor
    const maxX = containerRect.width - goal.offsetWidth;
    const maxY = containerRect.height - goal.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Mover el objetivo a la nueva posición
    goal.style.left = randomX + 'px';
    goal.style.top = randomY + 'px';
        }
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                moveCharacter(0, -1);
                break;
            case 'ArrowDown':
                moveCharacter(0, 1);
                break;
            case 'ArrowLeft':
                moveCharacter(-1, 0);
                break;
            case 'ArrowRight':
                moveCharacter(1, 0);
                break;
        }
    });
});
