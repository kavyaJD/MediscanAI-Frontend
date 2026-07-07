function HowItWorks() {

  const steps = [

    "Select Symptoms",

    "AI Analysis",

    "Disease Prediction",

    "Medical Report"

  ];

  return (

    <section className="py-20">

      <h1 className="text-4xl font-bold text-center mb-16">

        How It Works

      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {steps.map((step, index) => (

          <div
            key={step}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >

            <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold mx-auto">

              {index + 1}

            </div>

            <p className="mt-6 font-semibold">

              {step}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default HowItWorks;