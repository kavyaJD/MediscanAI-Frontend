import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SymptomSelector from "../components/SymptomSelector";
import SummaryCard from "../components/SummaryCard";

function Diagnosis() {
    const [selected] = useState<string[]>([]);
  return (
    
    <>
      <Navbar />

      <div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">

<SymptomSelector/>

</div>

<div>

<SummaryCard
selected={selected.length}
/>

</div>

</div>

      <Footer />
    </>
  );
}

export default Diagnosis;