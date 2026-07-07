import { Link } from "react-router-dom";
import { FaHeartbeat, FaShieldAlt, FaBrain } from "react-icons/fa";
import doctor from "../assets/doctor.svg";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-500 text-white">

      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur">

              AI Healthcare Platform

            </span>

            <h1 className="text-6xl font-extrabold mt-8 leading-tight">

              Predict Diseases

              <br />

              With Artificial Intelligence

            </h1>

            <p className="mt-8 text-xl text-blue-100">

              MediScanAI analyzes multiple symptoms using Machine
              Learning to provide fast disease predictions.

            </p>

            <div className="flex gap-4 mt-10">

              <Link
                to="/diagnosis"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Start Diagnosis
              </Link>

              <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">

                Learn More

              </button>

            </div>

            <div className="flex gap-10 mt-12 flex-wrap">

              <div className="flex items-center gap-2">
                <FaHeartbeat />
                <span>132+ Symptoms</span>
              </div>

              <div className="flex items-center gap-2">
                <FaBrain />
                <span>95% Accuracy</span>
              </div>

              <div className="flex items-center gap-2">
                <FaShieldAlt />
                <span>Secure</span>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src={doctor}
              alt="Doctor"
              className="w-[500px] drop-shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;