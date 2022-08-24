## Angular Bootstrap

Instalar bootstrap : posso incluir o link do cdn no html do data.binding.component.html

Mas também posso instalar com bootstrap no projeto. Usando a abstração ng2-bootstrap

ngx-bootstrap fornece componentes Bootstrap desenvolvidos por Angular, então você não precisa incluir componentes JS originais.

Instalação

Modo CLI angular
Use o comando Angular CLI ng add para atualizar seu projeto Angular.

ng add ngx-bootstrap


Instalou o ng2 bootstrap e o bootstrap nas nossas bibliotecas(conferir no package.json)

Manual way
Install ngx-bootstrap from npm

npm install ngx-bootstrap --save


      "styles": [
              "src/styles.css",
              "../data-binding2/node_modules/bootstrap/dist/css/bootstrap-reboot.min.css"
            ],




## Observação

Criar variavel local no html -> Ex: #classe

Class binding: <div class="alert" role="alert" [class.alert-success]="classe.value=='alert-success'">


## Referencias


- https://getbootstrap.com/docs/5.2/components/alerts/
- https://valor-software.com/ngx-bootstrap/#/documentation#getting-started
- https://github.com/valor-software/ngx-bootstrap