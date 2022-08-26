# Angular CLI: gerando o build de desenvolvimento

Como gerar o build de produção, que vai ser feito o deploy em que os usuarios vão poder utilizar a aplicação.

- Gerando o Build de Desenvolvimento

ng build


## Build de dev

![image](https://user-images.githubusercontent.com/52088444/186964900-764a27aa-e9e1-4771-b8cb-bea73856f5c4.png)


## Diferença do Build de DEV e Build de Produção?

O Build de dev não é obfuscado nem minificado. Então você terá o código todo junto em um arquivo só, porém ainda identada, com o nome das variáveis. As vezes ainda é possivel usar o código para debugar.

## Buid de prod

ng build --prod


Gera os mesmos arquivos que o build de dev, só que obfusca o código JS da aplicação.
CSS e templates HTML já minificados e incluidos em main.bubdle.js

![image](https://user-images.githubusercontent.com/52088444/186965756-de81f0dc-e2d3-48e2-869b-90ae47fc3323.png)

A unica coisa que não é minificado é i index.html



