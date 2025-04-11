import runCode from "../utils/runcode.util.js"


const compaileCode = (req, res) => {
    const { language, code, input } = req.body;
  
    if (!language || !code) {
      return res.status(400).json({ error: 'Language and code are required' });
    }
  
    runCode(language, code, input || '', (err, output) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ output });
    });
  };
  
  export {
    compaileCode
  }