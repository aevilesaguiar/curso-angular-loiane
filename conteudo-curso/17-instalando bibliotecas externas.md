# Angular CLI:instalando bibliotecas externas

- bootstrap
ng add @ng-bootstrap/ng-bootstrap

Não esquecer de incluir as bibliotecas no arquivo angula.json

"styles": [
              "src/styles.scss",
              "../angular-cli-libs-externas/node_modules/bootstrap/dist/css/bootstrap.css"

            ],
            "scripts": [

              "../angular-cli-libs-externas/node_modules/bootstrap/dist/js/bootstrap.js"
            ]

Referencias: https://getbootstrap.com/docs/5.2/components/navbar/


-materialize css

npm install materialize-css --save
npm install angular-materialize --save

npm install jquery --save

            "scripts": [

              "../angular-cli-libs-externas/node_modules/bootstrap/dist/js/bootstrap.js",
              "../angular-cli-libs-externas/node_modules/jquery/dist/jquery.js",
              "../angular-cli-libs-externas/node_modules/materialize-css/dist/js/materialize.js"

            ]
     

As fontes do projeto podem ser incluidas dentro do html através da url.


Podemos também incluir no style.css e ele ficará no escopo global

/* Importing Bootstrap SCSS file. */
@import '~bootstrap/scss/bootstrap';

/* Importing Bootstrap SCSS file. */
@import '~bootstrap/scss/bootstrap';


@import"../node_modules/materialize-css/dist/css/materialize.css";





Referencias: https://www.npmjs.com/package/materialize-angular
            https://materializecss.com/

-Lodaash

 npm install --save lodash


Instalar todos os arquivos do lodash  incluir no app.component.ts

import* as _ from 'lodash';

lodash é uma biblioteca global e externa, aí precisamos informar ao angular.

 npm install --save @types/lodash

 esse comando faz a ponte entre o lodash e o angular


Referencias: https://github.com/lodash/lodash
