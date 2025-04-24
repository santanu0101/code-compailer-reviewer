import reviewCode from "../utils/reviewcode.util.js";

// .......... reviewCodeHandler ..........
const reviewCodeHandler = async (req, res) => {
  const {code} = req.body;

  if (!code)
    return res.status(400).json({ error: "Code is required fro review" });

  try {
    const feedback = await reviewCode(code);
    res.status(200).json({ feedback });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { reviewCodeHandler };
