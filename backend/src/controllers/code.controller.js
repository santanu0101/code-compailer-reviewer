import { Question } from "../models/question.js";
import runCode from "../utils/runcode.util.js";

const compaileCode = (req, res) => {
  const { language, code, input } = req.body;

  if (!language || !code) {
    return res.status(400).json({ error: "Language and code are required" });
  }

  runCode(language, code, input || "", (err, output) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ output });
  });
};

const questionUpload = async (req, res) => {
  try {
    const data = req.body;
    const question = new Question(data);
    console.log(question);
    await question.save();

    res
      .status(200)
      .json({ message: "Question uploaded sucessfully", question });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to upload Question", details: error.message });
  }
};

const getAllQuestion = async (req, res) => {
  try {
    const questions = await Question.find({}, "id title description");
    if (!questions || questions.length === 0) {
      return res.status(404).json({ error: "No question Found" });
    }
    res.status(200).json({ message: "Question fetch sucessfully", questions });
  } catch (error) {
    res.status(500).json({ error: "Error fetcheing Question" });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findById(id, "id title description");
    if (!question) {
      res.status(404).json({ error: "Question not found" });
      return;
    }

    res.status(200).json({ message: "Question fetch sucessfully", question });
  } catch (error) {
    res.status(500).json({ error: "Error fetcheing Question" });
  }
};

const submitCode = async (req, res) => {
  try {
    const { code, language } = req.body;
    const { id } = req.params;

    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    const allTestCases = [
      ...question.sampleTestCases,
      ...question.hiddenTestCase,
    ];
    const result = [];

    let completed = 0;

    allTestCases.forEach((test, index) => {
      runCode(language, code, test.input, (err, output) => {
        if (err) {
          result[index] = {
            input: test.input,
            expected: test.expectedOutput.trim(),
            output: err.message,
            status: "false",
          };
        } else {
          const trimedOutput = output.trim();
          result[index] = {
            input: test.input,
            expected: test.expectedOutput?.trim(),
            output: trimedOutput,
            status:
              trimedOutput === test.expectedOutput?.trim() ? "true" : "false",
          };
        }

        completed++;

        if (completed === allTestCases.length) {
          const passed = result.filter((r) => r.status === "true").length;
          res.status(200).json({ passed, total: allTestCases.length, result });
        }
      });
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error evaluating submission", details: error.message });
  }
};

export {
  compaileCode,
  questionUpload,
  getAllQuestion,
  getQuestionById,
  submitCode,
};
