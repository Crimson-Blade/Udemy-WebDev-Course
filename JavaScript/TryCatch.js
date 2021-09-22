function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(30));
  } catch (e) {
    console.log(e, 'Please input a string');
  }
}
hello.toUpperCase();
