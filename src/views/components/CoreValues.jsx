import ipad from '../assets/images/marketing/woman-on-ipad.png';
import mic from '../assets/images/marketing/podcast-man-and-woman.png';
import computer from '../assets/images/marketing/group-around-computer.png';

export default function CoreValues() {
  return (
    <div className="bg-orange-50">
      <div className="mx-auto w-full max-w-7xl px-3 py-10">
        <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Core Values&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h2>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={ipad} alt="woman on ipad" />
            <div className="mt-3">
              <h2 className="font-bold text-xl text-center mb-2">Our Mission</h2>
              <p>
                The Closed Carrot fosters a collaborative tech community in Amarillo through
                hands-on innovation, offering professional development, mentorship, and teamwork.
                Our ultimate mission: empower technology professionals to pursue their tech passions
                and succeed in a constantly evolving industry.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={mic} alt="podcast man and woman" />
            <div className="mt-3">
              <h2 className="font-bold text-xl text-center mb-2">Our Services</h2>
              <p>
                Closed Carrot offers full-stack web development for custom websites and apps,
                marketing and brand management, and podcast production. All work is designed and
                delivered by members of the Closed Carrot tech hub, ensuring your requests are
                fulfilled.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={computer} alt="ground around computer" />
            <div className="mt-3">
              <h2 className="font-bold text-xl text-center mb-2">Our Vision</h2>
              <p>
                We empower our members with resources and support for successful tech careers,
                valuing creativity, collaboration, and lifelong learning. Our ultimate goal is to
                inspire the next generation of tech leaders and bring economic development through
                high tech businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
