var pessoa = {
    nome: 'Jurema',
    idade: 18,
    profissao: 'Piloto'
};
//objeto
var joao = {
    nome: 'João',
    idade: 45,
    profissao: 'Jogador'
};
//propriedade enum - basicamente um grupo de constantes
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Piloto"] = 2] = "Piloto";
    Profissao[Profissao["Jogador"] = 3] = "Jogador";
})(Profissao || (Profissao = {}));
var carla = {
    nome: 'Carla',
    idade: 32,
    profissao: Profissao.Atriz
};
var jessica = {
    nome: 'Jessica',
    idade: 27,
    profissao: Profissao.Professora,
    materias: ['Matemática', 'Fisolofia', 'História']
};
var pedro = {
    nome: 'Pedro',
    idade: 27,
    materias: ['Matemática', 'Fisolofia', 'História']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(jessica.materias);
