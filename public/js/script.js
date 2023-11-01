document.addEventListener('DOMContentLoaded', function () {
    let addIngredientsBtn = document.getElementById('addIngredientsBtn');
    let ingredientList = document.querySelector('.ingredientList');
    let ingredeintDiv = document.querySelector('.ingredeintDiv'); 

    addIngredientsBtn.addEventListener('click', function () {
        let newIngredients = ingredeintDiv.cloneNode(true);
        let input = newIngredients.querySelector('input');
        input.value = '';
        ingredientList.appendChild(newIngredients);
    });

    ingredientList.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('removeIngredient')) {
            e.target.closest(".ingredeintDiv").remove();
        }
    });

    ingredientList.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});
