import { useState } from "react";

interface Props {
  disease: string;
}

function AIHealthAssistant({ disease }: Props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = () => {
    const q = question.toLowerCase();

    if (q.includes("doctor")) {
      setAnswer(
        `For ${disease}, it is recommended to consult an appropriate medical specialist for proper diagnosis and treatment.`
      );
    } else if (q.includes("food")) {
      setAnswer(
        "Maintain a balanced diet, stay hydrated, and follow dietary advice given by your healthcare provider."
      );
    } else if (q.includes("exercise")) {
      setAnswer(
        "Light physical activity may be appropriate for some conditions, but avoid strenuous exercise until you receive medical advice."
      );
    } else if (q.includes("why")) {
      setAnswer(
        "The AI generated this prediction based on the combination of symptoms you selected and patterns learned from the training dataset."
      );
    } else if (q.includes("medicine")) {
      setAnswer(
        "This application does not prescribe medications. Please consult a qualified healthcare professional."
      );
    } else {
      setAnswer(
        "Please ask about doctors, food, exercise, medicines, or why the prediction was made."
      );
    }
  };

  return (
    <div className="mt-10 bg-white rounded-2xl shadow-lg border p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        🤖 AI Health Assistant
      </h2>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something about your prediction..."
        className="w-full border rounded-xl p-4"
      />

      <button
        onClick={getAnswer}
        className="mt-4 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
      >
        Ask AI
      </button>

      {answer && (
        <div className="mt-6 bg-blue-50 p-5 rounded-xl">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default AIHealthAssistant;