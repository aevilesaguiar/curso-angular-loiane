## Class e Style Binding

Use Class e Style Binding  para adicionar e remover nomes de classe CSS do class atributo de um elemento e para definir estilos dinamicamente.
Class e Style Binding é um tipo de Data Binding.

## Para criar uma Style Binding única, digite o seguinte:

[class.sale]="onSale"

Angular adiciona a classe quando a expressão vinculada onSaleé verdadeira e remove a classe quando a expressão é falsa - com exceção de undefined

## Para vincular a várias classes, digite o seguinte:

[class]="classExpression"

A expressão pode ser uma das seguintes:

Uma string delimitada por espaço de nomes de classe.
Um objeto com nomes de classe como chaves e expressões verdadeiras ou falsas como valores.
Uma matriz de nomes de classe.
Com o formato de objeto, o Angular adiciona uma classe somente se seu valor associado for verdadeiro.

Com qualquer expressão de objeto - como object, Array, Mapou Set- a identidade do objeto deve ser alterada para que o Angular atualize a lista de classes. Atualizar a propriedade sem alterar a identidade do objeto não tem efeito.

Se houver várias associações para o mesmo nome de classe, o Angular usará a precedência de estilo para determinar qual associação usar.

## A tabela a seguir resume a sintaxe de associação de classe.

|          BINDING TYPE          |              SYNTAX         |         INPUT TYPE                          |          EXAMPLE INPUT VALUES             |  
| :---                           |               :---:         |                :---:                        |                      ---:                 |
| `Single class binding`         | `[class.sale]="onSale"`     | `boolean| undefined| null`                  |           `true, false`                   |
| `Multi-class binding`          | `[class]="classExpression"` |            `string`                         |       `"my-class-1 my-class-2 my-class-3"`|
| `Multi-class binding `         | `[class]="classExpression"` | `Record<string, boolean | undefined | null>`|    `{foo: true, bar: false}`              |
| `Multi-class binding `         | `[class]="classExpression"` | `Array<string>`                             |    `	['foo', 'bar']`                      |


## Referencias

- https://angular.io/guide/class-binding
- https://getbootstrap.com/docs/5.2/components/alerts/