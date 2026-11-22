# Introdução ao DOM e seletores

Estudo sobre como o navegador representa uma página e como selecionar seus elementos com JavaScript. Os exemplos foram elaborados a partir do conteúdo e da referência fornecidos na aula.

## O que é o DOM?

DOM significa **Document Object Model**, ou Modelo de Objetos do Documento. Ele representa um documento HTML ou XML como uma árvore de nós em memória. Essa árvore inclui elementos, textos e outros tipos de nós.

Exemplo simplificado de uma página HTML:

```text
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        │   └── texto do título
        ├── p
        └── ul
            ├── li
            └── li
```

No navegador, JavaScript pode usar o objeto `document` para acessar essa estrutura. Depois de selecionar um elemento, podemos alterar seu texto, seus atributos ou suas classes. Também podemos criar e remover elementos.

O DOM é uma API fornecida pelo ambiente do navegador, não uma parte da linguagem JavaScript em si. Alterar o DOM muda o documento aberto; isso não salva automaticamente as alterações no arquivo HTML original.

## Métodos de seleção

| Método | Exemplo | Retorno |
| --- | --- | --- |
| `getElementById` | `document.getElementById('titulo')` | Um elemento ou `null` |
| `getElementsByClassName` | `document.getElementsByClassName('item')` | `HTMLCollection` viva |
| `getElementsByTagName` | `document.getElementsByTagName('li')` | `HTMLCollection` viva |
| `getElementsByName` | `document.getElementsByName('nome')` | `NodeList` viva |
| `querySelector` | `document.querySelector('.descricao')` | Primeiro elemento correspondente ou `null` |
| `querySelectorAll` | `document.querySelectorAll('#lista .item')` | `NodeList` estática |

Os métodos que retornam coleções produzem uma coleção vazia quando não há correspondências. Mesmo uma única correspondência é retornada dentro da coleção. Use `.length` para consultar a quantidade e `[0]` para acessar o primeiro item, quando existir. Essas coleções não são arrays.

O atributo `id` deve ser único na página. Uma classe pode ser compartilhada por vários elementos; `name` é um atributo usado, por exemplo, em campos de formulário.

## Quando usar # e ponto?

`querySelector` e `querySelectorAll` recebem seletores CSS:

```javascript
document.querySelector('#titulo');     // ID.
document.querySelector('.descricao'); // Classe.
document.querySelector('li');         // Nome da tag.
document.querySelector('[name="nome"]'); // Atributo.
```

Já `getElementById('titulo')` e `getElementsByClassName('item')` recebem os nomes sem `#` e sem `.`.

## Selecionar e alterar um elemento

```javascript
const descricao = document.querySelector('.descricao');

if (descricao !== null) {
  descricao.textContent = 'Texto atualizado pelo JavaScript.';
}
```

A verificação evita tentar acessar uma propriedade de `null` se o elemento não existir. `textContent` define texto; o conteúdo atribuído não é interpretado como HTML.

## Coleções vivas e listas estáticas

Uma coleção **viva** atualiza sua composição quando elementos correspondentes são adicionados ou removidos. Uma lista **estática** conserva os elementos selecionados no momento da consulta; ela não ganha ou perde itens automaticamente.

Isso não torna os elementos de uma lista estática imutáveis: seus itens continuam sendo referências aos elementos reais.

Na demonstração, a lista começa com dois itens. Ao adicionar um terceiro:

| Consulta | Quantidade antes | Quantidade depois |
| --- | --- | --- |
| `getElementsByClassName('item')`, guardada no início | 2 | 3 |
| `querySelectorAll('#lista .item')`, guardada no início | 2 | 2 |
| Uma nova chamada a `querySelectorAll('#lista .item')` | 2 | 3 |

Nem toda `NodeList` é estática: a retornada por `getElementsByName`, por exemplo, é viva.

## Arquivos e execução

- [index.html](./index.html): página com elementos para selecionar e botões para praticar.
- [exemplos.js](./exemplos.js): seleções comentadas, alteração de texto e demonstração das coleções.

Mantenha os dois arquivos na mesma pasta e abra `index.html` no navegador. Não é necessário instalar pacotes. Abra também o Console nas ferramentas de desenvolvimento para observar os resultados dos seletores.

O HTML usa `<script src="exemplos.js" defer></script>` para executar o script externo depois que o documento foi analisado. Assim, os elementos já existem quando o código os procura.

O Node.js, por padrão, não disponibiliza `document`. Por isso, execute a demonstração pelo HTML no navegador.

Os botões usam eventos de clique como complemento prático: permitem criar e remover elementos para observar as seleções em ação.

## Para praticar

- Selecione o título por `getElementById` e depois por `querySelector`.
- Compare o retorno de `querySelector('.item')` com o de `querySelectorAll('.item')`.
- Adicione e remova itens e observe as três contagens na página.
- Consulte um ID inexistente e compare o resultado com uma consulta plural sem correspondências.
- Recarregue a página e observe que o documento volta ao estado inicial.

## Referências

- [Selecionando elementos HTML com JavaScript — Formação DEV](https://blog.formacao.dev/selecionando-elementos-html-com-javascript/)
- [MDN: querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [MDN: getElementsByName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName)
