// Obtener todos los botones de like
const likeBtns = document.querySelectorAll('.likeBtn');

// Iterar sobre cada botón de like
likeBtns.forEach(likeBtn => {
    // Agregar evento de clic a cada botón de like
    likeBtn.addEventListener('click', function() {
        // Obtener el elemento span que muestra la cantidad de likes
        const likeCountElement = this.parentElement.querySelector('.likes');
        
        // Obtener la cantidad actual de likes
        let currentLikes = parseInt(likeCountElement.textContent);
        
        // Incrementar la cantidad de likes
        currentLikes++;
        
        // Actualizar la cantidad de likes en el elemento span
        likeCountElement.textContent = currentLikes + ' like(s)';
    });
});