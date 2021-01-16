# Front-End da aplicação NTask

Foi desenvolvido um front-end sem um framework apenas algumas dependências para facilitar o desenvolvimento.

## Dependências utilizadas

|   dependência   | motivo                                                                                                                                             |
| :-------------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
|   http-server   | CLI de servidor HTTP para arquivos estáticos                                                                                                       |
|   browserify    | compilador JS que torna o código em JS isomórfico (código que funciona tanto no Front como no Back) tornando em código padrão utilizado no Node.js |
|    babelify     | plugim para o browserify baseado no Babel                                                                                                          |
| browser-request | abstrai a complexidade das requisições AJAX                                                                                                        |
|    terser    | minificar os arquivos JS que foram compilados pelo browserify                                                                                      |
|  tiny-emitter   | módulo que permite trabalhar e implementar de forma orientada a eventos                                                                            |
