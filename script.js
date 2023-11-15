document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const goal = document.getElementById('goal');
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
            alert('¡Ganaste!');
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
