import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuid } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const runCode = (language, code, callback) => {
  const filename = uuid();
  const dir = path.join(__dirname, "../temp");
  const extMap = { js: "js", py: "py", cpp: "cpp" };
  const filePath = path.join(dir, `${filename}.${extMap[language]}`);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile(filePath, code, (err) => {
    if (err) return callback(err, null);

    let command;
    switch (language) {
      case "js":
        command = `node ${filePath}`;
        break;
      case "py":
        command = `python3 ${filePath}`;
        break;
      case "cpp":
        command = `g++ ${filePath} -o ${filePath}.out && ${filePath}.out`;
        break;
      default:
        return callback(new Error('Unsupported language'), null)
    }

    exec(command, (err, stdout, stderr)=>{
        fs.unlinkSync(filePath);
        if(language === 'cpp') fs.unlinkSync(`${filePath}.out`)
        if(err)  return callback(null, stderr);
        callback(null, stdout)
    })
  });
};

export default runCode