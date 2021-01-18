const Singnin = require("./components/signin"),
  Singnup = require("./components/signup"),
  TaskForm = require("./components/taskForm"),
  Tasks = require("./components/tasks"),
  User = require("./components/user"),
  Menu = require("./components/menu");

// classe observadora - responsável por carregar todas as peças do "quebra-cabeça"(templates) e tratar os evento de cada componete

class App {
  constructor(body, footer) {
    this.signin = new Singnin(body);
    this.signup = new Singnup(body);
    this.taskForm = new TaskForm(body);
    this.tasks = new Tasks(body);
    this.user = new User(body);
    this.menu = new Menu(footer);
  }

  init() {
    this.signin.render();
    this.addEventListener();
  }

  addEventListener() {
    this.signinEvents();
    this.signupEvents();
    this.taskFormEvents();
    this.taskEvents();
    this.userEvents();
    this.menuEvents();
  }

  signinEvents() {
    this.signin.on("error", () => alert("Erro de autenticação"));
    this.signin.on("signin", (token) => {
      localStorage.setItem("token", `Bearer ${token}`);
      alert("Você está autenticado!");
      this.menu.render("tasks");
      this.tasks.render();
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

  taskFormEvents() {
    this.taskForm.on("error", () => alert("Erro ao cadastrar a tarefa!"));
    this.taskForm.on("submit", () => {
      this.menu.render("tasks");
      this.tasks.render();
    });
  }

  taskEvents() {
    this.tasks.on("error", () => alert("Erro ao listar as tarefas!"));
    this.tasks.on("update-error", () => alert("Erro ao alterar a tarefa!"));
    this.tasks.on("remove-error", () => alert("Erro ao remover a tarefa!"));
    this.tasks.on("update", () => this.tasks.render());
    this.tasks.on("remove", () => this.tasks.render());
  }

  userEvents() {
    this.user.on("error", () => alert("Erro ao buscar este usuário!"));
    this.user.on("remove-error", () => alert("Erro ao excluir a conta"));
    this.user.on("remove-account", () => {
      alert("Que pena, sua conta foi excluída");
      localStorage.clear();
      this.menu.clear();
      this.signin.render();
    });
  }

  menuEvents() {
    this.menu.on("click", (path) => {
      this.menu.render(path);
      this[path].render();
    });

    this.menu.on("logout", () => {
      localStorage.clear();
      this.menu.clear();
      this.signin.render();
    });
  }
}

module.exports = App;
