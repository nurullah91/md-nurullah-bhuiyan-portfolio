import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsappSquare,
  FaTelegram,
} from "react-icons/fa";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <div>
      <div className="bg-blue-950 relative overflow-hidden w-full mb-14 md:mb-0">
        <Wave
          className="absolute bottom-0 w-full"
          fill="#02051A"
          paused={false}
          options={{
            height: 20,
            amplitude: 15,
            speed: 0.25,
            points: 8,
          }}
        />

        <div className="relative z-10 p-8">
          <div className="w-11/12 md:w-9/12 mx-auto">
            <div className="md:flex justify-between lg:justify-around">
              <div>
                <h2 className="text-2xl text-slate-300 font-bold">
                  Contact with me
                </h2>
                <div className="text-slate-400">
                  <p className="flex items-center">
                    <FaEnvelope className="mr-2 text-2xl text-white" />
                    nurullahbhuiyan91@gmail.com
                  </p>
                  <p className="flex items-center">
                    <FaWhatsappSquare className="mr-2 text-2xl text-green-400" />
                    +8801796668991 (whatsApp)
                  </p>
                  <p className="flex items-center">
                    <FaTelegram className="mr-2 text-2xl text-blue-400" />
                    +8801796668991 (Telegram)
                  </p>
                </div>
              </div>

              {/* social links */}
              <div className="my-5">
                <h3 className="text-xl font-bold text-slate-300">Find me On</h3>
                <div className="text-3xl flex space-x-4">
                  <div>
                    <a href="https://www.linkedin.com/in/nurullahbhuiyan91/">
                      <FaLinkedin className="text-blue-700 bg-whit"></FaLinkedin>
                    </a>
                  </div>

                  <div>
                    <a href="https://www.facebook.com/nurullahbhuiyan91">
                      <FaFacebook className="text-blue-500 bg-white rounded-full"></FaFacebook>
                    </a>
                  </div>

                  <div>
                    <a href="https://github.com/nurullah91">
                      <FaGithub className="text-black bg-white rounded-full"></FaGithub>
                    </a>
                  </div>
                  <div>
                    <a href="https://twitter.com/BMNurullah">
                      <FaTwitter className="text-blue-600  rounded-full"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-center mt-8">
              Copyright © 2023 - All right reserved by Md Nurullah Bhuiyan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
