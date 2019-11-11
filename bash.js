// output a prompt
process.stdout.write('prompt > ');

// stdin 'data'
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  // const pwd = process.env.PWD;
  if (cmd === 'pwd') {
    process.stdout.write(`${process.cwd()}`);
  }
  else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});
