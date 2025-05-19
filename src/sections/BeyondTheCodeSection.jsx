import { motion } from "framer-motion";
import busImage from "/assets/other/bus.jpg";
import vanImage from "/assets/other/van.jpg";
import walleImage from "/assets/other/walle.jpg";

export default function BeyondCodeSection() {
  return (
    <section id="beyondcode" className="px-6 py-4 max-w-4xl mx-auto">
      <div className="space-y-8 text-gray-800">
        {/* Piano */}
        <div>
          <h4 className="text-xl font-semibold mb-2">🎹 Piano</h4>
          <p className="mb-5">
            I’ve been playing piano ever since I can remember with Chopin, and
            Debussy being my personal favorites. I also enjoy playing anime
            soundtracks and jazzy reharmonizations.
          </p>
          <p>
            Here's a video of me playing a classic Chinese pop song that was
            popular in the 90s:
          </p>
          <div className="mt-4 w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bQP6dz2alL0?si=aXwzj07LeQqtHPcc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Orchestral Concerts */}
        <div>
          <h4 className="text-xl font-semibold mb-2">🎻 Orchestral Concerts</h4>
          <p className="flex">
            There’s nothing quite like the atmosphere of a live symphony. I
            regularly go to orchestral concerts, especially when the Vancouver
            Symphony Orchestra plays any of the Disney film music. Being in that
            environment helps me reconnect with creativity and reminds me of a
            time before time...
          </p>
        </div>

        {/* LEGO */}
        <div>
          <h4 className="text-xl font-semibold mb-2">🧱 Building LEGOs</h4>
          <p>
            I still build LEGO sets, I’m not ashamed of it. It is therapeutic in
            the same way some people find puzzles relaxing. I've included a few
            photos from my collection.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={busImage}
                alt="LEGO Bus"
                className="w-full h-64 object-cover rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={walleImage}
                alt="LEGO Wall-E"
                className="w-full h-64 object-cover rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={vanImage}
                alt="LEGO Van"
                className="w-full h-64 object-cover rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
