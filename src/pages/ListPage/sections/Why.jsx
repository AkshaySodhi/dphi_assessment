import Card from "../../../components/Card";
import firstIcon from "../../../assets/cardIcon/firsticon.svg";
import secondIcon from "../../../assets/cardIcon/secondicon.svg";
import thirdIcon from "../../../assets/cardIcon/thirdicon.svg";
import fourthIcon from "../../../assets/cardIcon/fourthicon.svg";

const Why = () => {
  const cardContent = [
    {
      cardNo: "01",
      cardIcon: firstIcon,
      cardTitle: "Prove your skills",
      cardDescription:
        "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
    },
    {
      cardNo: "02",
      cardIcon: secondIcon,
      cardTitle: "Learn from community",
      cardDescription:
        "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
    },
    {
      cardNo: "03",
      cardIcon: thirdIcon,
      cardTitle: "Challenge yourself",
      cardDescription:
        "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
    },
    {
      cardNo: "04",
      cardIcon: fourthIcon,
      cardTitle: "Earn recognition",
      cardDescription:
        "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
    },
  ];
  return (
    <section className="why-container">
      <h2 className="why-h2">
        Why Participate in{" "}
        <span className="text-[#44924c]">AI Challenges?</span>{" "}
      </h2>
      <div className="card-mapping-div grid justify-items-center grid-cols-2 gap-8">
        {cardContent.map((e) => {
          return (
            <div key={e.cardNo}>
              <Card
                icon={e.cardIcon}
                title={e.cardTitle}
                description={e.cardDescription}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Why;
