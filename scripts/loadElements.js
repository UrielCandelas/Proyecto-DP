function showElements() {
  const tablaBody = document.querySelector("#tabla-ejercicios tbody");
  tablaBody.innerHTML = "";
  
  const semanasKeys = Object.keys(localStorage).filter(key => key.startsWith("Rsemana"));
  
  semanasKeys.sort((a, b) => {
    const numA = parseInt(a.replace("Rsemana", ""));
    const numB = parseInt(b.replace("Rsemana", ""));
    return numB - numA;
  });
  let encontrado = false;
  semanasKeys.forEach((key) => {
    const ejercicios = JSON.parse(localStorage.getItem(key));
    ejercicios.forEach((ejercicio) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td class="border px-4 py-2 text-center">${key.replace("Rsemana", "Semana")}</td>
        <td class="border px-4 py-2 text-center">${ejercicio.name}</td>
        <td class="border px-4 py-2 text-center">${ejercicio.exercise === "yes" ? "Si" : "No"}</td>
        <td class="border px-4 py-2 text-center">${ejercicio.complication === "yes" ? "Si" : "No"}</td>
        <td class="border px-4 py-2 text-center">${ejercicio.complicationDescription}</td>
        <td class="border px-4 py-2 text-center">${ejercicio.difficulty}</td>
      `;
      tablaBody.appendChild(fila);
    });
    encontrado = true;
  });
  if (!encontrado) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td colspan="6" class="text-center">
        <span id="no-elements">No hay datos registrados</span>
      </td>
    `;
    tablaBody.appendChild(fila);
  }
}

document.addEventListener("DOMContentLoaded", showElements);
