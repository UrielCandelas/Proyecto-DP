function saveExercise(ejercicio) {
  const ejercicios = JSON.parse(localStorage.getItem("ejercicios")) || [];
  ejercicios.push(ejercicio);
  localStorage.setItem("ejercicios", JSON.stringify(ejercicios));
  if (ejercicios.length == 5) {
    saveWeek(ejercicios);
    localStorage.removeItem("ejercicios");
  }
  return ejercicios.length;
}

function saveWeek(ejercicios) {
  let semanaIndex = 1;
  while (localStorage.getItem(`Rsemana${semanaIndex}`)) {
    semanaIndex++;
  }
  localStorage.setItem(`Rsemana${semanaIndex}`, JSON.stringify(ejercicios));
  console.log(`Semana ${semanaIndex} guardada con los ejercicios:`, ejercicios);
}

//Brazos
document.getElementById("dataBrazos")?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    parseInt(document.getElementById("difficulty").value) > 10 ||
    parseInt(document.getElementById("difficulty").value) < 1
  ) {
    return alert("La dificultad no puede ser mayor a 10 o menor a 1");
  }
  if (document.getElementById("difficulty").value == "" || !document.querySelector('input[name="exercise"]:checked') || !document.querySelector('input[name="complication"]:checked')) {
    return alert("Hay algun dato faltante")
  }
  const data = {
    name: "BRAZOS",
    exercise: document.querySelector('input[name="exercise"]:checked')?.value,
    complication: document.querySelector('input[name="complication"]:checked')
      ?.value,
    complicationDescription: document.getElementById("complicationDescription")
      .value,
    difficulty: document.getElementById("difficulty").value,
  };
  const exerciseNumber = saveExercise(data);
  alert(
    `Se registro con exito el ejercicio de la semana numero: ${exerciseNumber}`
  );
});

//Abdomen
document.getElementById("dataAbdomen")?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    parseInt(document.getElementById("difficulty").value) > 10 ||
    parseInt(document.getElementById("difficulty").value) < 1
  ) {
    return alert("La dificultad no puede ser mayor a 10 o menor a 1");
  }
  if (document.getElementById("difficulty").value == "" || !document.querySelector('input[name="exercise"]:checked') || !document.querySelector('input[name="complication"]:checked')) {
    return alert("Hay algun dato faltante")
  }
  const data = {
    name: "ABDOMEN",
    exercise: document.querySelector('input[name="exercise"]:checked')?.value,
    complication: document.querySelector('input[name="complication"]:checked')
      ?.value,
    complicationDescription: document.getElementById("complicationDescription")
      .value,
    difficulty: document.getElementById("difficulty").value,
  };
  const exerciseNumber = saveExercise(data);
  alert(
    `Se registro con exito el ejercicio de la semana numero: ${exerciseNumber}`
  );
});
//Espalda
document.getElementById("dataEspalda")?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    parseInt(document.getElementById("difficulty").value) > 10 ||
    parseInt(document.getElementById("difficulty").value) < 1
  ) {
    return alert("La dificultad no puede ser mayor a 10 o menor a 1");
  }
  if (document.getElementById("difficulty").value == "" || !document.querySelector('input[name="exercise"]:checked') || !document.querySelector('input[name="complication"]:checked')) {
    return alert("Hay algun dato faltante")
  }
  const data = {
    name: "ESPALDA",
    exercise: document.querySelector('input[name="exercise"]:checked')?.value,
    complication: document.querySelector('input[name="complication"]:checked')
      ?.value,
    complicationDescription: document.getElementById("complicationDescription")
      .value,
    difficulty: document.getElementById("difficulty").value,
  };
  const exerciseNumber = saveExercise(data);
  alert(
    `Se registro con exito el ejercicio de la semana numero: ${exerciseNumber}`
  );
});

//Pecho
document.getElementById("dataPecho")?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    parseInt(document.getElementById("difficulty").value) > 10 ||
    parseInt(document.getElementById("difficulty").value) < 1
  ) {
    return alert("La dificultad no puede ser mayor a 10 o menor a 1");
  }
  if (document.getElementById("difficulty").value == "" || !document.querySelector('input[name="exercise"]:checked') || !document.querySelector('input[name="complication"]:checked')) {
    return alert("Hay algun dato faltante")
  }
  const data = {
    name: "PECHO",
    exercise: document.querySelector('input[name="exercise"]:checked')?.value,
    complication: document.querySelector('input[name="complication"]:checked')
      ?.value,
    complicationDescription: document.getElementById("complicationDescription")
      .value,
    difficulty: document.getElementById("difficulty").value,
  };
  const exerciseNumber = saveExercise(data);
  alert(
    `Se registro con exito el ejercicio de la semana numero: ${exerciseNumber}`
  );
});

//Piernas
document.getElementById("dataPiernas")?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    parseInt(document.getElementById("difficulty").value) > 10 ||
    parseInt(document.getElementById("difficulty").value) < 1
  ) {
    return alert("La dificultad no puede ser mayor a 10 o menor a 1");
  }
  if (document.getElementById("difficulty").value == "" || !document.querySelector('input[name="exercise"]:checked') || !document.querySelector('input[name="complication"]:checked')) {
    return alert("Hay algun dato faltante")
  }
  const data = {
    name: "PIERNAS",
    exercise: document.querySelector('input[name="exercise"]:checked')?.value,
    complication: document.querySelector('input[name="complication"]:checked')
      ?.value,
    complicationDescription: document.getElementById("complicationDescription")
      .value,
    difficulty: document.getElementById("difficulty").value,
  };
  const exerciseNumber = saveExercise(data);
  alert(
    `Se registro con exito el ejercicio de la semana numero: ${exerciseNumber}`
  );
});
