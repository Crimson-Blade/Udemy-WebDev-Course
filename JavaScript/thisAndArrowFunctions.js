const person = {
  firstName: 'Rei',
  lastName: 'Ayanami',
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  incorrectShoutName: function () {
    try {
      setTimeout(function () {
        console.log(this)
        console.log(this.fullName());
      }, 2000)
    } catch (e) {
      console.log(e + "hahahaha");
    }
  },
  correctShoutName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 2000)
  }
}
person.incorrectShoutName();
person.correctShoutName();