document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const goal = document.getElementById('goal');
    const scoreDisplay = document.getElementById('score');
    let score = 0; // Inicializa el contador
    let posX = 285; // Posición inicial X del personaje
    let posY = 185; // Posición inicial Y del personaje
    const speed = 5; // Velocidad de movimiento

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
