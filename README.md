# NgTest1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Detahes

no package.json tem o script `all`, onde quando dado um `npm run all` é rodado tanto `ng serve` (porta `http://localhost:4200`) como também o backend da aplicação `node ./server/server.js` que é escutada na porta `http://localhost:3000/photos`

o endereço `https://picsum.photos/200/300` gera imagens aleatórias

# Avançando com testes automatizados

## primeira parte

- revisão de conceitos;
- criação do component PhotoFrame;
- Aplicação do patten debounce.

## segunda parte: Testes temporais e de integração com o DOM

- o papel da função fakeAsync;
- controle de tempo com a função tick;
-teste de integração com o DOM;
- teste de atributos;
- testando a acessibilidade.

## terceira parte: eventos de UI

- simulação de cliques;
- emissão de eventos UI;
- combinação de dois eventos em um através de diretivas;
- teste de diretiva;
- diferença entre debugElemententre e nativeElement.

## quarta parte: cuidados com a abstração do Angular

- cuidados com o ngOnChanges;
- Diferentes abordagens para testar ngOnChanges;
- criar SimpleChanges programaticamente.

## última parte: avançando nos testes

- testes de componentes com escopo de página;
- spy com resposta programatica;
- injeção de serviços em nossos testes;
- testes de serviços que acessam API's com HttpClientTestingModule;
- uso dos mock providers;
