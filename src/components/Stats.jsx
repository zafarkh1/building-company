import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";

function Stats(props) {
  const [counterOn, setCounterOn] = useState(false);
  const { t } = useTranslation();

  const items = [
    {
      quantity: 120,
      title: t("stats.staff_count"),
    },
    {
      quantity: 43,
      title: t("stats.objects"),
    },
    {
      quantity: 250,
      title: t("stats.special_equipment"),
    },
    {
      quantity: 14,
      title: t("stats.years_in_market"),
    },
  ];

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div
        id="stats"
        className="relative bg-cover bg-no-repeat bg-bottom lg:px-[10rem] px-6 lg:py-12 py-6 text-white"
        style={{ backgroundImage: `url("/images/stats.jpg")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

        <div className="relative z-1">
          <h2 className="lg:text-5xl text-2xl font-medium lg:text-left text-center">
            {t("stats.title")}
          </h2>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 lg:w-2/3 w-full lg:mt-16 mt-8">
            {items.map((item, index) => (
              <div key={index} className="lg:text-left text-center">
                <div className="lg:text-5xl text-2xl font-medium lg:mb-4">
                  {counterOn && (
                    <>
                      <CountUp start={0} end={item.quantity} duration={4} />
                      <span>{" +"}</span>
                    </>
                  )}
                </div>
                <p className="lg:text-lg text-base">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default Stats;
