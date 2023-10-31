document.addEventListener('DOMContentLoaded', function () {
    let addIngredientsBtn = document.getElementById('addIngredientsBtn');
    let ingredientList = document.querySelector('.ingredientList');
    let ingredeintDiv = document.querySelector('.ingredeintDiv'); // Select the first .ingredeintDiv

    addIngredientsBtn.addEventListener('click', function () {
        let newIngredients = ingredeintDiv.cloneNode(true);
        let input = newIngredients.querySelector('input');
        input.value = '';
        ingredientList.appendChild(newIngredients);
    });

    // Add click event listener to all "Remove" buttons
    ingredientList.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('removeIngredient')) {
            e.target.closest(".ingredeintDiv").remove();
        }
    });
});
