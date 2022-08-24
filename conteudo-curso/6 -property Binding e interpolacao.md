## Property Binding e Interpolação

Data Biding: é uma forma de associar informações que estão no component para o template e vice versa.

Existem 4 formas de fazer o DataBinding

Interpolação (interpolation): {{}} -> vamos pegar o valor de um atributo ou um método e vamos ter a saída dessa informação no template

Biding de propriedade(property biding): [propriedade]="valor-> onde nós também temos a saída de um componente para o template. 
Valor do Component para o template. Usa-se colchetes <img [src]="urlImg"/>
Formato padrão é através de bind-nomePropriedade<img bind-src="urlImg"/>
Quando não existe uma propriedade no elemento, usa-se [attr.colspan] -> dificilmente temos que utilizar.


Event biding: (evento)="handler" ->ouvir eventos do template, ouvir click no botão, foco no campo de input, podemos executar alguma lógica;

Two-way Data Biding= [(ngModel)]="propriedade" -> conseguimos manter tanto o template quando o componente atualizado, exemplo quando trabalhamos com formulários