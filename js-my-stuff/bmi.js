const heightCm = document.getElementById('height');
const weightKg = document.getElementById('weight');
const btn = document.querySelector('button'); 
const result = document.getElementById('results')


btn.addEventListener('click', (event) => {
    event.preventDefault();
    let h = parseFloat(heightCm.value); 
    let w = parseFloat(weightKg.value); 
    let bmi = w / ((h / 100) ** 2); 
    result.innerHTML = `BMI is ${bmi.toFixed(2)}`; 
});
