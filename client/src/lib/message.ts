import emailjs from "@emailjs/browser";

const publicKey =
  import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY ?? "oxXv4k3xGtp94-7ic";
const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID ?? "service_17qhbc7";
const templateId =
  import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID ?? "template_a3cyu9m";

if (!publicKey || !serviceId || !templateId) {
  throw new Error("EmailJS environment variables are not defined.").message;
}

emailjs.init(publicKey as string);

export const sendEmail = async (email: string, name: string, msg: string) => {
  const templateParams = {
    name,
    message: msg,
    user_email: email,
  };

  return emailjs.send(
    serviceId as string,
    templateId as string,
    templateParams,
    publicKey as string,
  );
};
