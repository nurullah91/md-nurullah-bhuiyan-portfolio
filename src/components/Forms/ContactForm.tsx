"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactForm() {
  // Initialize the form ref with the correct type
  const form = useRef<HTMLFormElement | null>(null);

  // Annotate the event parameter type
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure form.current is not null before using it
    if (form.current) {
      emailjs
        .sendForm(
          "service_ysj7rx6",
          "template_pm9dotj",
          form.current,
          "MOznOZANEI_pCrPK8"
        )
        .then(
          () => {
            toast.success("Message sent successfully");
            form.current?.reset(); // Optional chaining to reset form safely
          },
          () => {
            toast.error("Something went wrong");
          }
        );
    } else {
      toast.error("Form reference is not available");
    }
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 ml-2 text-white">Name</h2>
            <input
              className="shadow-md px-3 py-2 rounded w-full"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 ml-2 text-white">
              Phone
            </h2>
            <input
              className="shadow-md px-3 py-2 rounded w-full"
              type="number"
              name="number"
              placeholder="Your Phone Number"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 ml-2 text-white">
              Email
            </h2>
            <input
              className="shadow-md px-3 py-2 rounded w-full"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 ml-2 text-white">
              Subject
            </h2>
            <input
              className="shadow-md px-3 py-2 rounded w-full"
              type="text"
              name="subject"
              placeholder="Email Subject"
            />
          </div>

          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-2 ml-2 text-white">
              Message
            </h2>
            <textarea
              className="shadow-md px-3 py-2 h-32 rounded w-full"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
        </div>
        <input
          className="text-white text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 px-6 mt-3 rounded py-2"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
