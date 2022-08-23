# Angular 2

## 8 blocos principais do framework

- Componente
Seria propriamente a view  é o que o usuario vai ver

Ela encapsula:
Template
Metadata: processamento das classes (presente dentro dos componentes, esses metadados é o que permite ao angular ler as classes e fazer o processamento das mesmas )
Dado a ser mostrado na tela(Data Binding é a associação dos dados que nós temos no nosso componente com os componentes html que nós temos no template, um componente consegue conversar com um template mostrando dados através do data Biding)
Comportamento da View(além de mostrar dados o componente é responsável pelo o comportamento da view )
O COMPONENTE é como se fosse a junção do template com o código html e o controller(responsável pelo o comportamento da view) e o escopo.

Quando criamos aplicações em angular 2 nós criamos aplicações que são orientadas a componentes. Então tudo na nossa aplicação vai ser orientada a componente.


![image](https://user-images.githubusercontent.com/52088444/186178095-fd263f94-14bb-4029-b5e3-438dfe2df177.png)



Cada componente pode ter um componente dentro do mesmo

![image](https://user-images.githubusercontent.com/52088444/186178758-2db614b3-4823-4046-a727-71a264b90d8a.png)

![image](https://user-images.githubusercontent.com/52088444/186178932-3ec97caf-a0eb-4dab-8f22-a87257811d91.png)

O principal objetivo do componente é mostrar dados, então podemos fazer integração com o backend com o servidor.

![image](https://user-images.githubusercontent.com/52088444/186179480-493ed802-31e5-48dd-bf9e-66892c903fea.png)

Não é uma boa pratica escrever código de lógica de negócio dentro do nosso componente, para isso utilizamos o serviço e o serviço será responsável por manter toda a lógica de negócio e também se comunicar com o backend, além disso o serviço pode ser injetado em outras classes, e para isso utilizamos injeção de dependencia do angular.

![image](https://user-images.githubusercontent.com/52088444/186181215-036f66d6-bc31-4e63-b496-23f73043e100.png)


- Diretivas
  Responsável por modificar elemntos DOM e/ou seu comportamento( os componentes em si são diretivas por que os componentes em si estão modificando o DOM)
  
  
- Roteamento
 o Responsável pela navegação no angular é o router. 
- serviços
- template
- metadata
- Data Binding
- Injeção de dependencia

![image](https://user-images.githubusercontent.com/52088444/186182869-2d452320-d37e-47ec-ad47-65b93dded2e7.png)

