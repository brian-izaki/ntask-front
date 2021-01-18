const NTask = require("../ntask");
const Template = require("../templates/footer");

class Menu extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }

  render(path) {
    this.body.innerHTML = Template.render(path);
    this.addEventListener();
  }

  clear() {
    this.body.innerHTML = "";
  }

  addEventListener() {
    this.pathsClick();
    this.logoutClick();
  }

  pathsClick() {
    const links = this.body.querySelectorAll("[data-path]");
    for (let i = 0, max = links.length; i < max; i++) {
      links[i].addEventListener("click", (e) => {
        e.preventDefault();
        const link = e.target.parentElement; // retorna o objeto HTML ao qual o alvo pertence
        const path = link.getAttribute("data-path"); // pega o valor atribuido ao data-path especificado no template
        this.emit("click", path);
      });
    }
  }

  logoutClick() {
    const link = this.body.querySelector("[data-logout]");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      this.emit("logout")
    }) 
  }
}

module.exports = Menu;
