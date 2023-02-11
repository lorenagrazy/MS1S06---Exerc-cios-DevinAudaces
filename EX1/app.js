//Desenvolvimento da função 

function sleep(valor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(valor);
    }, 3000);
  });
}

// Chamando a Função

sleep(30)
  .then(result => {
    console.log(result); // 30
  })
  .catch(error => {
    console.error(error);
  });