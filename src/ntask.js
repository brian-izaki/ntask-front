const TinyEmitter = require('tiny-emitter');
const Request = require('browser-request');

// classe responsável para deixar mais semântico e organizado
// url tem o endereço da API
// request carrega o módulo browswe-request que abstrai a complexidade das requisições AJAX

class NTask extends TinyEmitter {
  constructor() {
    super();
    this.request = Request;
    this.URL = "https://localhost:3000";
  }
}

module.exports = NTask;