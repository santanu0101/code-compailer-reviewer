import { writeFileSync, unlinkSync } from 'fs';
import { spawn } from 'child_process';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const runCode = (language, code, input = '', callback) => {
  const id = uuidv4();
  let extension = '', command = '', args = [];

  switch (language) {
    case 'py':
      extension = 'py';
      command = 'python3';
      break;
    case 'js':
      extension = 'js';
      command = 'node';
      break;
    case 'cpp':
      extension = 'cpp';
      break;
    default:
      return callback(new Error('Unsupported language'));
  }

  const filename = `${id}.${extension}`;
  const filepath = path.join(process.cwd(), filename);

  writeFileSync(filepath, code);

  if (language === 'cpp') {
    const executable = `/temp/${id}.exe`;
    console.log(executable)
    const execPath = path.join(process.cwd(), executable);
    console.log(execPath)
    const compile = spawn('g++', [filepath, '-o', executable]);
    console.log(compile)

    compile.on('close', (code) => {
      if (code !== 0) return callback(new Error('Compilation failed'));

      const run = spawn(`./${executable}`);
      handleIO(run, input, () => {
        unlinkSync(filepath);
        unlinkSync(execPath);
      }, callback);
    });
  } else {
    const run = spawn(command, [filepath]); // python3 ./2834892734.py
    handleIO(run, input, () => unlinkSync(filepath), callback);
  }
};

function handleIO(proc, input, cleanup, callback) {
  let output = '';
  proc.stdin.write(input);
  proc.stdin.end();

  proc.stdout.on('data', data => output += data.toString());
  proc.stderr.on('data', data => output += data.toString());

  proc.on('close', () => {
    cleanup();
    callback(null, output.trim());
  });
}

export default runCode;
