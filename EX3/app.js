function aprovarDadosCadastrais( cliente ) {
  return new Promise( (resolve, reject) => {
      if (cliente.cpf === 11111111111)
          resolve(true);
      else
          reject(false);
  });
}

function aprovarValorSolicitado( cliente, valor ) {
  return new Promise( (resolve, reject) => {
      if (cliente.margem >= valor)
          resolve(true);
      else
          reject(false);
  });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

// continue com o tratamento dos resultados de ambas as promises...


/* Recuperando o resultado de ambas as promises 
e imprimindo "APROVADO" ou "REPROVADO", conforme os resultados das 
promises forem resolvidos ou rejeitados*/ 

Promise.all([aprovacaoCadastro, aprovacaoValor])
  .then((resultados) => {
    if (resultados[0] && resultados[1]) {
      console.log("APROVADO");
    } else {
      console.log("REPROVADO");
    }
  })
  .catch((erro) => {
    console.error(erro);
  })

  .finally(() => {
    console.log("Fim do Processamento");
  });

