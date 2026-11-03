export const contacts = [
  { name: "Felix", phone: "+254712780902", display: "0712 780 902" },
  { name: "Nelius", phone: "+254702613253", display: "0702 613 253" },
] as const;

export const services = [
  ["doctors-home-visits", "Doctor’s home visits", "Care conversations and clinical visits arranged around the comfort of home.", "/images/healthcare-worker.jpg", "Black African healthcare professional reviewing a care record"],
  ["24-hour-nursing-care", "24-hour nursing care", "Nursing support for families who need dependable care at home.", "/images/healthcare-worker.jpg", "Black African nurse reviewing care notes with medical equipment"],
  ["laboratory-tests", "Laboratory tests", "Ask the team about available tests and collection arrangements.", "/images/healthcare-worker.jpg", "Black African healthcare professional preparing clinical notes"],
  ["physiotherapy", "Physiotherapy services", "Support with mobility and rehabilitation needs in a familiar setting.", "/images/family-support.jpg", "Black African family supporting a healthy routine at home"],
  ["diagnostic-services", "Diagnostic services", "Ultrasound, ECG, X-ray and echocardiography arrangements to confirm with the team.", "/images/healthcare-worker.jpg", "Black African healthcare professional preparing clinical notes"],
  ["health-education", "Health education", "Clear, practical guidance to help families understand care needs.", "/images/family-support.jpg", "Black African parent and child sharing a healthy routine at home"],
  ["maternal-neonatal-care", "Maternal and neonatal care", "Thoughtful support for mothers, newborns and their families.", "/images/maternal-neonatal.jpg", "Black African nurse caring for a newborn in a hospital nursery"],
  ["palliative-care", "Palliative care", "Compassionate care focused on comfort, dignity and family support.", "/images/family-support.jpg", "Black African family sharing a supportive moment at home"],
  ["basic-first-aid", "Basic first aid", "Initial first-aid support for children and adults. Enquire about availability.", "/images/healthcare-worker.jpg", "Black African healthcare worker holding a clinical tablet"],
  ["outreach-services", "Outreach services", "Care initiatives that help bring health support closer to communities.", "/images/family-support.jpg", "Black African family spending time together at home"],
  ["ambulance-services", "Ambulance services", "Ask about ambulance availability and service arrangements.", "/images/healthcare-worker.jpg", "Black African healthcare professional preparing clinical equipment"],
  ["caregiver-support", "Caregiver support", "Practical support for families caring for a loved one at home.", "/images/family-support.jpg", "Black African parent and child supporting a healthy routine at home"],
  ["post-surgery-care", "Post-surgery care", "A considered transition home after surgery, shaped around the care plan.", "/images/healthcare-worker.jpg", "Black African healthcare professional reviewing a care plan"],
  ["medical-equipment", "Medical equipment", "Ask about available equipment, delivery and use arrangements.", "/images/healthcare-worker.jpg", "Black African healthcare professional using a clinical tablet"],
] as const;

export type Service = (typeof services)[number];

export function whatsappUrl(contact: (typeof contacts)[number] = contacts[0]) {
  return `https://wa.me/${contact.phone.replace("+", "")}?text=${encodeURIComponent(`Hello Vital, I would like to discuss my care needs with ${contact.name}.`)}`;
}
