const alunos = [];

function calcularMedia(notas) {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  const media = soma / notas.length;
  return Math.round(media);
}

function exibirStatus(media) {
  if (media >= 7) {
    return "Aprovado!!";
  } 
else if (5 <= media < 7) {
    return "Em Recuperação!!";
  } else {
    return "Reprovado!!";
  }
}

while (true) 
{
    console.log("\nMENU DE OPÇÕES:");
    console.log("1. Cadastrar Aluno");
    console.log("2. Cadastrar Notas");
    console.log("3. Exibir Boletim");
    console.log("4. Sair");

    const opcao = parseInt(prompt("Escolha uma opção :"));

    switch (opcao) {
case 1:
        const nomeAluno = prompt("Cadastre o nome do aluno :");
        alunos.push({ nome: nomeAluno, notas: [] });
        console.log(`Aluno ${nomeAluno} cadastrado com sucesso!`);
        break;
           
case 2:
        const nomeParaCadastro = prompt("Digite o nome do aluno para cadastrar notas :");
        const alunoParaCadastro = alunos.find((aluno) => aluno.nome === nomeParaCadastro);

        if (alunoParaCadastro) {
          for (let i = 0; i < 3; i++) {
            const nota = parseFloat(prompt(`Cadastre a nota ${i + 1} para ${nomeParaCadastro} :`));
            alunoParaCadastro.notas.push(Math.round(nota));
          }
          console.log(`Notas cadastradas com sucesso para ${nomeParaCadastro}!`);
        } 
        
        else {
          console.log(`Aluno ${nomeParaCadastro} não encontrado!!`);
        }
break;

case 3:
const nomeParaBoletim = prompt("Digite o nome do aluno para exibir o boletim :");      
const alunoParaBoletim = alunos.find((aluno) => aluno.nome === nomeParaBoletim);

        if (alunoParaBoletim) {
          const media = calcularMedia(alunoParaBoletim.notas);
          const status = exibirStatus(media);

          console.log(`Nome : ${alunoParaBoletim.nome}`);
          console.log(`Notas : ${alunoParaBoletim.notas.join(", ")}`);
          console.log(`Média : ${media}`);
          console.log(`Status : ${status}`);
        } 
       
else {
          console.log(`Aluno ${nomeParaBoletim} não encontrado!`);
        }
        break;
     
case 4:
        console.log("Programa encerrado!");
        return;
      
     
default:
        console.log("Opção inválida!!");
    
    }
}
