export const siteName = "Vital Home Based Care & Emergency Services";
export const email = "vital2HBC@gmail.com";
export const contacts = [
  { phone: "+254712780902", display: "0712 780 902" },
  { phone: "+254702613253", display: "0702 613 253" },
] as const;

const whatsappMessage = "Hello VitalBased Homecare, I have an inquiry to make.";

export function whatsappUrl(contact: (typeof contacts)[number]) {
  return `https://wa.me/${contact.phone.slice(1)}?text=${encodeURIComponent(whatsappMessage)}`;
}

export const photos = {
  hero: { src: "/images/home-nurse-elderly-patient.webp", alt: "A nurse supporting an older woman as she sits upright on her sofa" },
  family: { src: "/images/family-support.webp", alt: "A woman and child washing their hands together at a kitchen sink" },
} as const;

export function serviceHref(slug: string) {
  return `/services#${slug}`;
}

type Service = {
  slug: string;
  title: string;
  description: string;
  photoAlt: string;
};

export const services = [
  {
    slug: "doctors-home-visits", title: "Doctor’s home visits",
    description: "Home consultations for new concerns and follow-up visits, subject to suitability and doctor availability.",
    photoAlt: "A doctor talking with a patient at her dining table",
  },
  {
    slug: "24-hour-nursing-care", title: "24-hour nursing care",
    description: "Day and overnight nursing at home. Hours and scope depend on care needs and staff availability.",
    photoAlt: "A nurse adjusting the cushion behind an older man in an armchair",
  },
  {
    slug: "laboratory-tests", title: "Laboratory tests",
    description: "Laboratory testing and sample collection. Collection arrangements depend on the test.",
    photoAlt: "A laboratory technician handling capped sample vials",
  },
  {
    slug: "physiotherapy", title: "Physiotherapy services",
    description: "Support with movement and rehabilitation. Home sessions depend on suitability and availability.",
    photoAlt: "A physiotherapist guiding a standing balance exercise",
  },
  {
    slug: "diagnostic-services", title: "Diagnostic services",
    description: "Ultrasound, ECG, X-ray and echocardiography. Locations and referral requirements vary by investigation.",
    photoAlt: "A clinician using an ultrasound machine beside a patient",
  },
  {
    slug: "health-education", title: "Health education",
    description: "Practical information for patients and families about day-to-day care.",
    photoAlt: "A nurse showing two adults a hand hygiene diagram",
  },
  {
    slug: "maternal-neonatal-care", title: "Maternal and neonatal care",
    description: "Care and support for mothers and newborns alongside existing maternity follow-up.",
    photoAlt: "A midwife and mother looking at a swaddled newborn",
  },
  {
    slug: "palliative-care", title: "Palliative care",
    description: "Support for people living with serious illness and their families, with a focus on comfort and dignity.",
    photoAlt: "A caregiver holding an older patient’s hand",
  },
  {
    slug: "basic-first-aid", title: "Basic first aid",
    description: "Basic first aid for children and adults, subject to availability.",
    photoAlt: "A healthcare worker applying a bandage to a person’s wrist",
  },
  {
    slug: "outreach-services", title: "Outreach services",
    description: "Community health programmes. Topics and formats depend on the group and available support.",
    photoAlt: "Healthcare workers speaking with people in a community hall",
  },
  {
    slug: "ambulance-services", title: "Ambulance services",
    description: "Ambulance transport, including planned patient transfers, subject to availability.",
    photoAlt: "Two patient transport staff beside an ambulance",
  },
  {
    slug: "caregiver-support", title: "Caregiver support",
    description: "Practical support with everyday care at home. Tasks and schedules depend on the household’s needs and available support.",
    photoAlt: "A caregiver helping an older woman fasten her cardigan",
  },
  {
    slug: "post-surgery-care", title: "Post-surgery care",
    description: "Support at home after surgery, guided by the patient’s discharge instructions and care needs.",
    photoAlt: "A healthcare professional reviewing a discharge sheet with a patient at home",
  },
  {
    slug: "medical-equipment", title: "Medical equipment",
    description: "Help with medical equipment availability, supply and delivery.",
    photoAlt: "A wheelchair, walking frame and adjustable bed in an equipment room",
  },
] as const satisfies readonly Service[];
