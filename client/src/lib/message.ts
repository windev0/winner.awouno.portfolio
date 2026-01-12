import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

console.log("public key", publicKey);
export const sendEmail = (email:string, name: string, msg: string): any => {
  const templateParams = {
    name,
    message: msg,
    user_email: email,
  };
  emailjs
    .send(serviceId, templateId, templateParams, {
      publicKey: publicKey,
    })
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};
