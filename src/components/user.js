const NTask = require("../ntask");
const Template = require("../templates/user");

class User extends NTask {
  constructor(body) {
    super();
    this.body = body;
  }

  render() {
    this.renderUserData();
  }

  addEventListener() {
    this.userCacelClick();
  }

  renderUserData() {
    const opts = {
      method: "GET",
      url: `${this.URL}/user`,
      json: true,
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    this.request(opts, (err, resp, data) => {
      if (err || resp.status === 412) {
        this.emit("error", err);
      } else {
        this.body.innerHTML = Template.render(data);
        this.addEventListener();
      }
    });
  }

  userCancelClick() {
    const button = this.body.querySelector("[data-remove-account]");

    button.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Tem certeza que deseja excluir sua consta?")) {
        const opts = {
          method: "DELETE",
          url: `${this.URL}/user`,
          headers: {
            authorization: localStorage.getItem("token"),
          },
        };
        this.request(opts, (err, resp, data) => {
          if(err || resp.status === 412){
            this.emit("remove-error", err);
          } else {
            this.emit("remove-account");
          }
        })
      }
    });
  }
}

module.exports = User;
