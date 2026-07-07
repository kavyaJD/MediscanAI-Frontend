import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Analysis() {

  const navigate = useNavigate();
  const location = useLocation();

  const [progress, setProgress] = useState(0);


  useEffect(() => {

    const interval = setInterval(() => {

      setProgress((prev)=>{

        if(prev >= 100){

          clearInterval(interval);

          navigate("/result", {
            state: location.state
          });

          return 100;

        }

        return prev + 10;

      });


    },400);


    return ()=>clearInterval(interval);


  },[]);



  return (

    <div className="min-h-screen bg-blue-50 flex items-center justify-center">


      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md text-center">


        <div className="text-7xl animate-bounce">

          🤖

        </div>


        <h1 className="text-3xl font-bold text-blue-700 mt-6">

          MediScanAI

        </h1>


        <p className="text-gray-600 mt-3">

          AI is analyzing your symptoms...

        </p>



        <div className="w-full bg-gray-200 rounded-full h-5 mt-8">


          <div

          className="bg-blue-700 h-5 rounded-full transition-all"

          style={{
            width:`${progress}%`
          }}

          >

          </div>


        </div>



        <p className="mt-4 text-blue-700 font-semibold">

          {progress}% Complete

        </p>



        <div className="mt-8 text-left space-y-3 text-gray-600">


          <p>🔍 Checking symptom patterns</p>

          <p>🧠 Comparing medical conditions</p>

          <p>📊 Calculating confidence score</p>

          <p>📄 Generating health report</p>


        </div>



      </div>


    </div>

  );

}


export default Analysis;