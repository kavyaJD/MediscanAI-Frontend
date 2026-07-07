import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { symptomCategories } from "../data/symptoms";
import API from "../services/api";

function SymptomSelector() {

  const symptoms = symptomCategories.flatMap(
    (category) => category.symptoms
  );


  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();



  const toggleSymptom = (key: string) => {

    if (selected.includes(key)) {

      setSelected(
        selected.filter((item) => item !== key)
      );

    } else {

      setSelected([
        ...selected,
        key
      ]);

    }

  };



  const predictDisease = async () => {

    setLoading(true);

    try {

      const response = await API.post("/predict", {
        symptoms: selected
      });


      navigate("/analysis", {
        state: response.data
      });


    } catch(error) {

      console.error(error);
      alert("Prediction Failed!");

    }


    setLoading(false);

  };




  return (

    <div className="max-w-6xl mx-auto space-y-8">


      {/* AI Welcome Card */}

      <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-3xl p-8 shadow-xl">

        <h1 className="text-4xl font-bold">
          🩺 MediScanAI Assistant
        </h1>


        <p className="mt-3 text-lg">

          Tell us your symptoms and our AI model will analyze
          possible health conditions.

        </p>


        <div className="mt-5 bg-white/20 rounded-xl p-4">

          🤖 AI powered disease prediction system

        </div>


      </div>




      {/* Main Card */}

      <div className="bg-white shadow-xl rounded-3xl p-8">



        {/* Search */}

        <input

          type="text"

          placeholder="🔍 Search symptoms..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

          className="w-full border rounded-xl p-4 mb-8 focus:ring-2 focus:ring-blue-500 outline-none"

        />





        {/* Selected Counter */}

        <div className="flex justify-between items-center mb-8">


          <h2 className="text-xl font-bold text-gray-700">

            Select Symptoms

          </h2>


          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">

            {selected.length} Selected

          </span>


        </div>





        {/* Categories */}


        {symptomCategories.map((category)=>(


          <div key={category.category} className="mb-10">


            <h3 className="text-2xl font-bold text-blue-700 mb-4">

              {category.category}

            </h3>




            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


            {category.symptoms

            .filter((symptom)=>

              symptom.label
              .toLowerCase()
              .includes(search.toLowerCase())

            )

            .map((symptom)=>(


              <button

                key={symptom.key}

                onClick={()=>toggleSymptom(symptom.key)}

                className={`p-4 rounded-xl border transition duration-300 text-sm md:text-base

                ${
                  selected.includes(symptom.key)

                  ?

                  "bg-blue-700 text-white shadow-lg scale-105"

                  :

                  "bg-white hover:bg-blue-50 hover:shadow"

                }

                `}

              >

                {selected.includes(symptom.key) && "✓ "}

                {symptom.label}


              </button>



            ))}


            </div>


          </div>


        ))}






        {/* Selected Symptoms */}


        <div className="bg-blue-50 rounded-2xl p-6">


          <h2 className="text-xl font-bold text-blue-700">

            🧾 Your Symptoms

          </h2>



          {

          selected.length === 0

          ?

          <p className="text-gray-500 mt-3">

            Start selecting symptoms to continue.

          </p>


          :


          <div className="flex flex-wrap gap-3 mt-4">


          {selected.map((key)=>{


            const symptom = symptoms.find(
              (s)=>s.key===key
            );


            return (

              <span

              key={key}

              className="bg-blue-700 text-white px-4 py-2 rounded-full"

              >

              ✓ {symptom?.label}

              </span>

            );


          })}


          </div>

          }


        </div>






        {/* Analyze Button */}


        <button

          onClick={predictDisease}

          disabled={
            selected.length===0 || loading
          }

          className="mt-8 w-full bg-blue-700 text-white py-4 rounded-2xl text-lg font-bold hover:bg-blue-800 transition disabled:bg-gray-400"


        >

          {

          loading

          ?

          "🤖 AI is analyzing your symptoms..."

          :

          "🩺 Start AI Health Analysis"

          }


        </button>



      </div>


    </div>

  );

}


export default SymptomSelector;