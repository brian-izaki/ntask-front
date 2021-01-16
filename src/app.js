const Singnin = require("./components/signin");
const Singnup = require("./components/signup");

// classe observadora

class App {
  constructor(body) {
    this.signin = new Singnin(body);
    this.signup = new Singnup(body);
  }

  init() {
    this.signin.render();
    this.addEventListener();
  }

  addEventListener() {
    this.signinEvents();
    this.signupEvents();
  }

  signinEvents() {
    this.signin.on("error", () => alert("Erro de autenticação"));
    this.signin.on("signin", (token) => {
      localStorage.setItem("token", `Bearer ${token}`);
      alert("Você está autenticado!");
    });
    this.signin.on("signup", () => this.signup.render());
  }

  signupEvents() {
    this.signup.on("error", () => alert("Erro no cadastro"));
    this.signup.on("signup", (user) => {
      alert(`${user.name} você foi cadastrado com sucesso!`);
      this.signin.render();
    });
  }
}

module.exports = App;
