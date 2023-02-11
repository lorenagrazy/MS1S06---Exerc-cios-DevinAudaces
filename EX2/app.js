//Implementação da função 

function showTime() {
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);
}

//Chamando a função
showTime();
