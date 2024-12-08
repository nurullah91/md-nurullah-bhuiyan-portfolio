import ContactForm from "@/components/Forms/ContactForm";
import ContactAnimation from "../ContactAnimation";
import SectionHeading from "@/components/SectionHeading";
import CustomContainer from "@/components/CustomContainer";
const Contact = () => {
  return (
    <section id="contact" className="contactBG my-12">
      <CustomContainer>
        <SectionHeading title="Contact with me" />

        <div className="md:flex mb-12 justify-between">
          <ContactAnimation />
          <div className="border-2 p-10 rounded-md backdrop-blur-sm border-blue-700">
            <ContactForm />
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14720.998505630212!2d90.3417988053382!3d22.718961313022458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375536a6c8af33f3%3A0x50adbaa202591950!2sKawnia%2C%20Barishal!5e0!3m2!1sen!2sbd!4v1689594165790!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </CustomContainer>
    </section>
  );
};

export default Contact;
