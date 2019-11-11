// output a prompt
process.stdout.write("prompt > ");

const pwdPrint = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

// stdin 'data'
process.stdin.on("data", data => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwdPrint.pwdFunc();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd.slice(0,3) === "cat") {
    cat(cmd.slice(4));
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
