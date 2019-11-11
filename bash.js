// output a prompt
process.stdout.write("prompt > ");

const pwdPrint = require("./pwd");
const ls = require("./ls");

// stdin 'data'
process.stdin.on("data", data => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwdPrint.pwdFunc();
  } else if (cmd === "ls") {
    ls();
  } else {
    process.stdout.write("You typed: " + cmd);
  }
});
