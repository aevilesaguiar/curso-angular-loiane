# Diretivas no Angular

Diretivas é uma forma de passar instruções para o template, para o nosso código html.

<ul>
  <li *ngFor="let curso of cursos">{{ curso }}
  </li>
</ul>

"Itere todos os itens desse array, esse array se chama cursos, e a cada iteração, atribua o valor do elemento atual á uma variável  curso. Replique também o elemento da tag<li></li> com valor da variavel curso a cada iteração."


Os componentes eles também são diretivas, nós podemos dizer que os componentes são diretivas com template.

template:
<cursos-lista></cursos-lista>

"Crie um componente do Tipo(classe) especificado e renderize a view(template) desse componente nesse lugar".

Existem basicamente dois tipos de diretivas, existem as diretivas estruturais que são utilizadas para modificar a estrutura do DOM, ou seja interagem com a view e modificam a estrutura do DOM e/ou código html: *ngFor e *ngIf.
Existem também as diretivas de atributos, elas não modificam a estrutura  do DOM, mas interagem com o elemento em que foram aplicadas, exemplo modificar a classe ou algum estilo: ng-class e ng-style.

*ngIf é basicamente uma condicional que podemos adicionar no nosso template html. Ela possui o mesmo comportamento que a condicional if tem.

## ngIf X Hidden

Hidden: recomendado para árvore de elementos pequenos, ele é menos custoso usar o [hidden] caso o custo de criar a arvore de elementos seja grande. Ex: mensagem de validação de formulário

*ngIf: recomendado para árvore de elementos grandes; É mais custoso. 