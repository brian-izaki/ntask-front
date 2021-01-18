# Front-End da aplicação NTask

Foi desenvolvido o front-end sem framework, foi utilizado apenas algumas dependências para facilitar o desenvolvimento.

---

## Dependências utilizadas

|   dependência   | motivo                                                                                                                                             |
| :-------------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
|   http-server   | CLI de servidor HTTP para arquivos estáticos                                                                                                       |
|   browserify    | compilador JS que torna o código em JS isomórfico (código que funciona tanto no Front como no Back) tornando em código padrão utilizado no Node.js |
|    babelify     | plugim para o browserify baseado no Babel                                                                                                          |
| browser-request | abstrai a complexidade das requisições AJAX                                                                                                        |
|     terser      | minificar os arquivos JS que foram compilados pelo browserify                                                                                      |
|  tiny-emitter   | módulo que permite trabalhar e implementar de forma orientada a eventos                                                                            |

---

## inicializar aplicação

- precisa inicializar a [api ntask](https://github.com/brian-izaki/ntask).
- utilizar o comando `npm start`
- ir para o link http://localhost:3001

---

## Diretórios e arquivos
- Components
  - neste dir, ficam o controle do que será pego dos formulários e então submetido.
  - é possível notar o uso da função request que é herdado da classse NTask, nele é utilizado o módulo browser-requesnt, assim, **emitindo** requisições à API.

- templates
  - aqui é montado o HTML, pode-se notar o `exports.render` ele é uma maneira de utilizar:
    ```
    let render = "texto";
    module.exports = render;
    ```
- App.js
  - esta é a classe obervadora, na qual, sempre que um componente **emite** um evento, ele interage com o layout.
  - o `this.emit` presente nos componentes está ligado com os eventos "escutados" aqui.

- index.js
  - nele é montado os templates na tag `main` de acordo com os eventos que ocorem durante a navegação.
  
