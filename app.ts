const pessoa = {
  nome: 'Jurema',
  idade: 18,
  profissao: 'Piloto'
}

//objeto
const joao: {nome: string, idade: number, profissao: string} = {
  nome: 'João',
  idade: 45,
  profissao: 'Jogador'
}

//propriedade enum - basicamente um grupo de constantes
enum Profissao {
  Professora, 
  Atriz, 
  Piloto,
  Jogador
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao?: Profissao
}

interface Estudante extends Pessoa {
  materias: string[]           //lista do tipo string
}


const carla: Pessoa = {
  nome: 'Carla', 
  idade: 32,
  profissao: Profissao.Atriz
}

const jessica: Estudante = {
  nome: 'Jessica', 
  idade: 27,
  profissao: Profissao.Professora,
  materias: ['Matemática', 'Fisolofia', 'História']
}


const pedro: Estudante = {
  nome: 'Pedro', 
  idade: 27,
  materias: ['Matemática', 'Fisolofia', 'História']
}

function listar(lista: string[]) {
  for(const item of lista) {
    console.log('- ', item)
  }
}

listar(jessica.materias);


