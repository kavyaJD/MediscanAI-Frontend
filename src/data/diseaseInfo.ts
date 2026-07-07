export interface DiseaseInfo {
  description: string;
  specialist: string;
  precautions: string[];
}

const diseaseInfo: Record<string, DiseaseInfo> = {

  "Fungal infection": {
    description:
      "A fungal infection is caused by fungi affecting the skin, nails or other body parts.",

    specialist: "Dermatologist",

    precautions: [
      "Keep affected area clean",
      "Avoid scratching",
      "Wear clean clothes",
      "Take medicines prescribed by a doctor"
    ]
  },

  "Allergy": {
    description:
      "An allergy occurs when the immune system reacts to allergens such as pollen, food or dust.",

    specialist: "Allergist",

    precautions: [
      "Avoid allergens",
      "Stay hydrated",
      "Take antihistamines if prescribed",
      "Consult a doctor if symptoms worsen"
    ]
  },

  "GERD": {
    description:
      "GERD is a digestive disorder where stomach acid flows back into the food pipe.",

    specialist: "Gastroenterologist",

    precautions: [
      "Avoid spicy food",
      "Eat smaller meals",
      "Do not lie down immediately after eating",
      "Maintain healthy weight"
    ]
  }

};

export default diseaseInfo;