import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import StatisticCard from "../components/StatisticCard";
import FeatureCard from "../components/FeatureCard";
import HowItWorks from "../components/HowItWorks";

import {
  FaBrain,
  FaBolt,
  FaFileMedical,
  FaShieldAlt,
  FaStethoscope,
  FaChartLine,
  FaRobot,
  FaUserShield
} from "react-icons/fa";

function Home() {

  return (

    <>

      <Navbar />


      {/* Hero Section */}

      <Hero />




      {/* Statistics */}

      <section className="bg-gradient-to-b from-white to-blue-50 py-24">

        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">

            MediScanAI Intelligence

          </h2>



          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">


            <StatisticCard
              number="132+"
              text="Symptoms Analyzed"
            />


            <StatisticCard
              number="40+"
              text="Disease Categories"
            />


            <StatisticCard
              number="AI"
              text="Powered Diagnosis"
            />


            <StatisticCard
              number="24/7"
              text="Health Assistance"
            />


          </div>


        </div>


      </section>





      {/* Features */}

      <section className="bg-slate-50 py-24">


        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">

            Powerful Healthcare Features

          </h2>



          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


            <FeatureCard

              icon={FaBrain}

              title="AI Disease Prediction"

              description="Machine learning model analyzes symptoms and predicts possible health conditions."

            />



            <FeatureCard

              icon={FaBolt}

              title="Instant Analysis"

              description="Get AI-generated health insights within seconds."

            />



            <FeatureCard

              icon={FaFileMedical}

              title="Smart Medical Reports"

              description="Receive detailed reports with confidence scores and precautions."

            />



            <FeatureCard

              icon={FaShieldAlt}

              title="Safe & Responsible"

              description="Designed with privacy and healthcare awareness in mind."

            />


          </div>


        </div>


      </section>






      {/* Why MediScanAI */}

      <section className="py-24 bg-white">


        <div className="max-w-6xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">

            Why Choose MediScanAI?

          </h2>



          <div className="grid md:grid-cols-4 gap-6">


            <div className="bg-blue-50 rounded-2xl p-6 text-center">


              <FaRobot className="text-4xl text-blue-700 mx-auto"/>


              <h3 className="font-bold text-lg mt-4">

                AI Powered

              </h3>


              <p className="text-gray-600 mt-2">

                Intelligent symptom analysis

              </p>


            </div>




            <div className="bg-blue-50 rounded-2xl p-6 text-center">


              <FaStethoscope className="text-4xl text-blue-700 mx-auto"/>


              <h3 className="font-bold text-lg mt-4">

                Health Insights

              </h3>


              <p className="text-gray-600 mt-2">

                Understand possible conditions

              </p>


            </div>





            <div className="bg-blue-50 rounded-2xl p-6 text-center">


              <FaChartLine className="text-4xl text-blue-700 mx-auto"/>


              <h3 className="font-bold text-lg mt-4">

                Confidence Score

              </h3>


              <p className="text-gray-600 mt-2">

                Transparent AI predictions

              </p>


            </div>





            <div className="bg-blue-50 rounded-2xl p-6 text-center">


              <FaUserShield className="text-4xl text-blue-700 mx-auto"/>


              <h3 className="font-bold text-lg mt-4">

                User Focused

              </h3>


              <p className="text-gray-600 mt-2">

                Simple and accessible design

              </p>


            </div>


          </div>


        </div>


      </section>






      {/* How It Works */}

      <HowItWorks />






      {/* CTA Section */}

      <section className="bg-blue-700 py-20">


        <div className="max-w-5xl mx-auto text-center px-6 text-white">


          <h2 className="text-4xl font-bold">

            Ready to Analyze Your Symptoms?

          </h2>



          <p className="mt-4 text-lg">

            Start your AI-powered health assessment with MediScanAI.

          </p>



          <a

          href="/diagnosis"

          className="inline-block mt-8 bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:scale-105 transition"

          >

            🩺 Start Diagnosis

          </a>



        </div>


      </section>







      {/* Disclaimer */}

      <section className="bg-blue-50 py-20">


        <div className="max-w-5xl mx-auto px-6">


          <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-xl p-8 shadow">


            <h2 className="text-2xl font-bold mb-4 text-gray-800">

              ⚠ Medical Disclaimer

            </h2>


            <p className="text-gray-700 leading-8">

              MediScanAI provides AI-assisted predictions for educational
              purposes only. It is not a replacement for professional medical
              advice, diagnosis, or treatment. Always consult a qualified
              healthcare professional for medical concerns.

            </p>


          </div>


        </div>


      </section>





      <Footer />


    </>

  );

}


export default Home;