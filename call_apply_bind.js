let name_ = {
  firstName: "Mouli VJ",
  lastName: "Saini",

  printFullName: function () {
    console.log(this.firstName);
    console.log(this.lastName);
  },
};

name_.printFullName();

let another = {
  name: "Ajai",
  job: "Front End Dev !",
};

function display(method) {
  console.log(this.name);
  console.log(this.job);
  console.log(method);
}

display.call(another, "call !");
display.apply(another, ["call !"]);

const bind_ = display.bind(display);
bind_();
