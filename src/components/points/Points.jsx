import "./Points.css";
import bulb from "/Bulb.svg";
import saving from "/Cost.svg";
import boost from "/Boost.svg";
const Points = () => {
  const data = [
    {
      id: 1,
      img: bulb,
      title: "Grow your business",
      para: "We believe in challenges and so we have made challenges",
    },
    {
      id: 2,
      img: saving,
      title: "Cost savings ideas",
      para: "We also help our clients with social media strategy.",
    },
    {
      id: 3,
      img: boost,
      title: "Boost performance",
      para: "We deliver email marketing campaigns to your audience",
    },
  ];
  return (
    <section id="points">
      <div className="section">
        <div className="container">
          {data.map((point) => {
            return (
              <div className={`pointBox point${point.id}`} key={point.id}>
                <div className="iconBox">
                  <img src={point.img} alt="icon" className="icon" />
                </div>
                <div>
                  <h2 className="title">{point.title}</h2>
                  <p className="para">{point.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Points;
