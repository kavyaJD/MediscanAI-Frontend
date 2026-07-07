import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, Link } from "react-router-dom";
import diseaseInfo from "../data/diseaseInfo";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import jsPDF from "jspdf";
import AIHealthAssistant from "../components/AIHealthAssistant";


function Result() {
  const { state } = useLocation();
  const downloadReport = () => {

  const pdf = new jsPDF();


  pdf.setFontSize(20);

  pdf.text(
    "MediScanAI Health Report",
    20,
    20
  );


  pdf.setFontSize(12);


  pdf.text(
    `Disease: ${state.prediction}`,
    20,
    40
  );


  pdf.text(
    `Confidence: ${state.confidence}%`,
    20,
    50
  );



  pdf.text(
    "Selected Symptoms:",
    20,
    70
  );


  let y = 80;


  if(state.symptoms){

    state.symptoms.forEach((symptom:string)=>{

      pdf.text(
        `• ${symptom}`,
        25,
        y
      );

      y += 10;

    });

  }




  if(info){


    pdf.text(
      "Specialist:",
      20,
      y+10
    );


    pdf.text(
      info.specialist,
      25,
      y+20
    );



    pdf.text(
      "Precautions:",
      20,
      y+40
    );


    let py = y+50;


    info.precautions.forEach((item)=>{


      pdf.text(
        `• ${item}`,
        25,
        py
      );


      py += 10;


    });


  }




  pdf.text(
    "Disclaimer: AI prediction only. Consult a healthcare professional.",
    20,
    280
  );



  pdf.save(
    "MediScanAI_Report.pdf"
  );


};

  if (!state) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <Link
            to="/diagnosis"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Go Back
          </Link>
        </div>

      </>
    );
  }

  const info = diseaseInfo[state.prediction];

  const report = {
  disease: state.prediction,
  confidence: state.confidence,
  symptoms: state.symptoms,
  date: new Date().toLocaleString(),
};

const existing =
  JSON.parse(localStorage.getItem("predictionHistory") || "[]");

if (
  existing.length === 0 ||
  existing[0].date !== report.date
) {
  existing.unshift(report);
  localStorage.setItem(
    "predictionHistory",
    JSON.stringify(existing)
  );
}

  const confidenceStatus =
    state.confidence >= 75
      ? "High Confidence"
      : state.confidence >= 50
      ? "Moderate Confidence"
      : "Low Confidence";

  const today = new Date().toLocaleDateString();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-blue-50 py-10">

        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-10">

            <Link
  to="/dashboard"
  className="hover:text-blue-600"
>
  Dashboard
</Link>

          {/* Header */}

          <h1 className="text-4xl font-bold text-center text-blue-700">
            🩺 MediScanAI Report
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Generated on {today}
          </p>


          {/* Disease Card */}

          <div className="mt-10 bg-red-50 p-6 rounded-xl border">

            <h2 className="text-xl font-semibold">
              Predicted Disease
            </h2>

            <p className="text-3xl text-red-600 font-bold mt-3">
              {state.prediction}
            </p>

          </div>



          {/* Symptoms */}

          <div className="mt-8">

            <h2 className="text-xl font-semibold">
              Symptoms Analyzed
            </h2>


            {state.symptoms && state.symptoms.length > 0 ? (

              <div className="flex flex-wrap gap-3 mt-4">

                {state.symptoms.map((symptom:string) => (

                  <span
                    key={symptom}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                  >
                    ✓ {symptom.replaceAll("_", " ")}
                  </span>

                ))}

              </div>

            ) : (

              <p className="text-gray-500 mt-3">
                No symptoms available
              </p>

            )}

          </div>



          {/* Confidence */}

          <div className="mt-8">

            <h2 className="text-xl font-semibold">
              Confidence Score
            </h2>


            <div className="flex items-center gap-3 mt-3">

              <p className="text-3xl text-green-600 font-bold">
                {state.confidence}%
              </p>


              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                {confidenceStatus}
              </span>

            </div>


            <div className="w-full bg-gray-300 rounded-full h-4 mt-4">

              <div
                className="bg-green-600 h-4 rounded-full"
                style={{
                  width: `${state.confidence}%`
                }}
              />

            </div>

          </div>

          {/* AI Health Risk Assessment */}

<div className="mt-10 bg-white border rounded-2xl shadow-lg p-8">

  <h2 className="text-2xl font-bold text-blue-700 mb-6">
    🧠 AI Health Risk Assessment
  </h2>

  <div className="flex justify-between items-center">

    <span className="text-lg font-semibold">
      Risk Level
    </span>

    <span
      className={`px-4 py-2 rounded-full text-white ${
        Number(state.confidence) >= 80
          ? "bg-red-500"
          : Number(state.confidence) >= 60
          ? "bg-yellow-500"
          : "bg-green-500"
      }`}
    >
      {Number(state.confidence) >= 80
        ? "High"
        : Number(state.confidence) >= 60
        ? "Moderate"
        : "Low"}
    </span>

  </div>

  <div className="w-full bg-gray-200 rounded-full h-5 mt-5">

    <div
      className={`h-5 rounded-full ${
        Number(state.confidence) >= 80
          ? "bg-red-500"
          : Number(state.confidence) >= 60
          ? "bg-yellow-500"
          : "bg-green-500"
      }`}
      style={{
        width: `${state.confidence}%`
      }}
    />

  </div>

  <div className="mt-6 bg-blue-50 rounded-xl p-5">

    <h3 className="font-bold text-blue-700">
      🤖 AI Recommendation
    </h3>

    <p className="mt-3 text-gray-700">

      {Number(state.confidence) >= 80 &&
        "The AI detected a strong match for the predicted condition. Please consult a healthcare professional immediately."}

      {Number(state.confidence) >= 60 &&
        Number(state.confidence) < 80 &&
        "The AI found a moderate match. Monitor your symptoms and seek medical advice if they continue."}

      {Number(state.confidence) < 60 &&
        "The prediction confidence is relatively low. Continue observing your symptoms and consult a doctor if necessary."}

    </p>

  </div>

</div>


{/* Top 3 Predictions */}

{state.top_predictions && (

  <div className="mt-10">

    <h2 className="text-xl font-semibold">
      Possible Conditions
    </h2>

    <div className="mt-5 space-y-4">

      {state.top_predictions.map(
        (item: {
          disease: string;
          confidence: number;
        }, index: number) => (

        <div
          key={item.disease}
          className="flex justify-between items-center bg-blue-50 p-4 rounded-lg"
        >

          <div>

            <p className="font-semibold text-lg">

              {index === 0 && "🥇 "}
              {index === 1 && "🥈 "}
              {index === 2 && "🥉 "}

              {item.disease}

            </p>

          </div>


          <span className="font-bold text-blue-700">

            {item.confidence}%

          </span>


        </div>

      ))}

    </div>

  </div>

)}

{/* Explainable AI Section */}

<div className="mt-10 bg-purple-50 p-6 rounded-xl border">

  <h2 className="text-xl font-semibold text-purple-700">
    🧠 Why this prediction?
  </h2>

  <p className="mt-3 text-gray-700">
    MediScanAI analyzed the following symptoms to generate this prediction:
  </p>


  <div className="flex flex-wrap gap-3 mt-5">

    {state.symptoms?.map((symptom: string) => (

      <span
        key={symptom}
        className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full"
      >

        ✓ {symptom.replaceAll("_", " ")}

      </span>

    ))}

  </div>


</div>

{/* AI Confidence Visualization */}

{state.top_predictions && (

<div className="mt-10 bg-white border rounded-xl p-6">

  <h2 className="text-xl font-semibold mb-5">
    📊 AI Confidence Analysis
  </h2>


  <ResponsiveContainer width="100%" height={300}>

    <BarChart data={state.top_predictions}>

      <XAxis
        dataKey="disease"
      />

      <YAxis />

      <Tooltip />


      <Bar
        dataKey="confidence"
      />

    </BarChart>

  </ResponsiveContainer>


</div>

)}

          {/* Disease Information */}

          {info && (

            <>

              <div className="mt-10">

                <h2 className="text-xl font-semibold">
                  Description
                </h2>

                <p className="mt-2 text-gray-700">
                  {info.description}
                </p>

              </div>



              <div className="mt-8 bg-blue-50 p-5 rounded-lg">

                <h2 className="text-xl font-semibold">
                  Recommended Specialist
                </h2>

                <p className="mt-3">
                  👨‍⚕️ {info.specialist}
                </p>

              </div>



              <div className="mt-8">

                <h2 className="text-xl font-semibold">
                  Precautions
                </h2>


                <ul className="list-disc ml-6 mt-3">

                  {info.precautions.map((item:string) => (

                    <li key={item} className="mb-2">
                      {item}
                    </li>

                  ))}

                </ul>


              </div>

            </>

          )}



          {/* Disclaimer */}

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mt-10">

            <p>
              <strong>⚠️ Disclaimer:</strong>

              <br />

              MediScanAI provides predictions using machine learning
              for educational purposes only. Please consult a qualified
              healthcare professional for proper diagnosis and treatment.
            </p>

          </div>

          <AIHealthAssistant disease={state.prediction} />



          {/* Button */}

          <button

onClick={downloadReport}

className="w-full bg-green-600 text-white py-4 rounded-xl mt-6 hover:bg-green-700"

>

📄 Download Medical Report

</button>

          <Link
            to="/diagnosis"
            className="block text-center bg-blue-700 text-white py-4 rounded-lg mt-10 hover:bg-blue-800"
          >
            Predict Again
          </Link>


        </div>

      </div>


      <Footer />

    </>
  );
}

export default Result;