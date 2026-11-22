// Execute este arquivo por meio de index.html no navegador.
// O atributo defer garante que o HTML já tenha sido analisado.

// 1. Seleção por ID: recebe o nome sem # e retorna um elemento ou null.
const titulo = document.getElementById('titulo');
console.log('getElementById:', titulo);

// 2. Seleção por classe: recebe o nome sem ponto e retorna uma HTMLCollection viva.
const itensPorClasse = document.getElementsByClassName('item');
console.log('getElementsByClassName — quantidade inicial:', itensPorClasse.length); // 2

// 3. Seleção por tag: também retorna uma HTMLCollection viva.
const itensPorTag = document.getElementsByTagName('li');
console.log('getElementsByTagName — quantidade inicial:', itensPorTag.length); // 2

// 4. Seleção pelo atributo name: retorna uma NodeList viva.
const camposPorNome = document.getElementsByName('nome');
console.log('getElementsByName:', camposPorNome);
console.log('Primeiro campo por name:', camposPorNome[0]);

// 5. querySelector recebe um seletor CSS e retorna o primeiro elemento ou null.
const descricao = document.querySelector('.descricao');

if (descricao !== null) {
  descricao.textContent = 'Texto atualizado pelo JavaScript usando um seletor do DOM.';
}

console.log('querySelector por atributo:', document.querySelector('[name="nome"]'));

// 6. querySelectorAll retorna uma NodeList estática, guardada no momento da consulta.
const selecaoInicial = document.querySelectorAll('#lista .item');
console.log('querySelectorAll — quantidade inicial:', selecaoInicial.length); // 2

// 7. Sem correspondências: seleção individual retorna null; plural retorna coleção vazia.
console.log('ID inexistente:', document.getElementById('nao-existe')); // null
console.log('Seletor sem correspondência:', document.querySelector('.nao-existe')); // null
console.log('Lista sem correspondências:', document.querySelectorAll('.nao-existe').length); // 0

// 8. Complemento: botões para observar as coleções quando o DOM muda.
const lista = document.getElementById('lista');
const botaoAdicionar = document.getElementById('adicionar');
const botaoRemover = document.getElementById('remover');
const quantidadeViva = document.getElementById('quantidade-viva');
const quantidadeInicial = document.getElementById('quantidade-inicial');
const quantidadeAtual = document.getElementById('quantidade-atual');
let proximoItem = 3;

function atualizarContagens() {
  // A coleção viva é atualizada automaticamente.
  quantidadeViva.textContent = itensPorClasse.length;

  // A lista estática mantém os mesmos dois itens selecionados no início.
  quantidadeInicial.textContent = selecaoInicial.length;

  // Uma nova consulta estática retrata o estado atual da página.
  quantidadeAtual.textContent = document.querySelectorAll('#lista .item').length;
  botaoRemover.disabled = lista.children.length === 0;
}

botaoAdicionar.addEventListener('click', function () {
  const novoItem = document.createElement('li');
  novoItem.className = 'item';
  novoItem.textContent = 'Novo item ' + proximoItem;
  lista.append(novoItem);
  proximoItem = proximoItem + 1;
  atualizarContagens();
});

botaoRemover.addEventListener('click', function () {
  const ultimoItem = lista.lastElementChild;

  if (ultimoItem !== null) {
    ultimoItem.remove();
  }

  atualizarContagens();
});

atualizarContagens();
