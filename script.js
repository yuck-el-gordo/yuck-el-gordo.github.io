window.onload = function() {
    const character = document.getElementById('character');
    const goal = document.getElementById('goal');
    const scoreDisplay = document.getElementById('score');
    let score = 0; // Inicializa el contador
    let posX = 285; // Posición inicial X del personaje
    let posY = 185; // Posición inicial Y del personaje
    const speed = 5; // Velocidad de movimiento del personaje

    // Configuración del movimiento del objetivo
    let goalDirection = { x: 1, y: 1 }; // Dirección inicial del movimiento del objetivo
    const goalSpeed = 2; // Velocidad de movimiento del objetivo
    const moveInterval = 50; // Intervalo en milisegundos para mover el objetivo

    function moveCharacter(dx, dy) {
        posX += dx * speed;
        posY += dy * speed;
        character.style.left = posX + 'px';
        character.style.top = posY + 'px';
        checkGoal();
    }

    function moveGoal() {
        const gameContainer = document.getElementById('game-container');
        let goalX = goal.offsetLeft + goalDirection.x * goalSpeed;
        let goalY = goal.offsetTop + goalDirection.y * goalSpeed;
        const containerWidth = gameContainer.offsetWidth;
        const containerHeight = gameContainer.offsetHeight;

        // Revertir la dirección si el objetivo alcanza los bordes del contenedor
        if (goalX < 0 || goalX + goal.offsetWidth > containerWidth) {
            goalDirection.x *= -1;
        }
        if (goalY < 0 || goalY + goal.offsetHeight > containerHeight) {
            goalDirection.y *= -1;
        }

        // Actualizar la posición del objetivo
        goal.style.left = goalX + 'px';
        goal.style.top = goalY + 'px';
    }

    function checkGoal() {
        const characterRect = {
            x: character.offsetLeft,
            y: character.offsetTop,
            width: character.offsetWidth,
            height: character.offsetHeight
        };
        const goalRect = {
            x: goal.offsetLeft,
            y: goal.offsetTop,
            width: goal.offsetWidth,
            height: goal.offsetHeight
        };

        if (characterRect.x < goalRect.x + goalRect.width &&
            characterRect.x + characterRect.width > goalRect.x &&
            characterRect.y < goalRect.y + goalRect.height &&
            characterRect.height + characterRect.y > goalRect.y) {
            score++;
            scoreDisplay.innerText = 'Veces Atrapado: ' + score;
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

    // Iniciar el movimiento del objetivo
    setInterval(moveGoal, moveInterval);
};
