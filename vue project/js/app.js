var app = new Vue({
  el: "#app",
  data: {
    // message: "member list ",
    members: [
      { name: "Jack", work: true, age: 30 },
      { name: "William", work: false, age: 32 },
      { name: "Mary", work: false, age: 29 },
    ],
    nameInput: "",
    workInput: "",
    ageInput: "",
  },
  methods: {
    MemberCreate() {
      let objMember = {};
      objMember["name"] = this.nameInput;
      objMember["work"] = this.workInput;
      objMember["age"] = this.ageInput;
      this.members.push(objMember);
      // console.log(objMember);
    },
  },
});
