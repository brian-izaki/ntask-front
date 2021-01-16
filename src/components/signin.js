const NTask = require("../ntask");
const Template = require("../templates/signin");

// os  componentes vão herdar a classe NTask pois ele tem os atributos da url e simplificação do ajax
// o template é carregado pois é aqui que é realizado as interações de requisição para a API
// e também as respostas das requisições.

class Signin extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }

  render() {
    this.body.innerHTML = Template.render();
    this.body.querySelector("[data-email]").focus();
    this.addEventListener();
  }

  addEventListener() {
    this.formSubmit();
    this.signupClick();
  }

  formSubmit() {
    const form = this.body.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.querySelector("[data-email]");
      const password = e.target.querySelector("[data-password]");
      const opts = {
        method: "POST",
        url: `${this.URL}/token`,
        json: true,
        body: {
          email: email.value,
          password: password.value,
        },
      };
      this.request(opts, (err, resp, data) => {
        if (err || resp.status === 401) {
          this.emit("error", err);
        } else {
          this.emit("signin", data.token);
        }
      });
    });
  }

  signupClick() {
    const signup = this.body.querySelector("[data-signup]");
    signup.addEventListener("click", (e) => {
      e.preventDefault();
      this.emit("signup");
    });
  }
}

module.exports = Signin;
