document.getElementById("calcBtn").addEventListener("click", function(){
  const height = +document.getElementById("height").value;
  const weight = +document.getElementById("weight").value;
  const age = +document.getElementById("age").value;

  if(!height || !weight || !age){
    alert("Please fill all fields.");
    return;
  }

  const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // 男性基準
  const protein = (weight * 2).toFixed(1);
  const fat = (weight * 0.8).toFixed(1);
  const carbs = Math.round((bmr - (protein*4 + fat*9)) / 4);

  document.getElementById("bmrResult").innerHTML = `BMR: ${Math.round(bmr)} kcal/day`;
  document.getElementById("macroResult").innerHTML = `Protein ${protein} g, Fat ${fat} g, Carbs ${carbs} g`;

  document.getElementById("calories").textContent = Math.round(bmr);
  document.getElementById("protein").textContent = `${protein} g`;
  document.getElementById("fat").textContent = `${fat} g`;
  document.getElementById("carbs").textContent = `${carbs} g`;
});
