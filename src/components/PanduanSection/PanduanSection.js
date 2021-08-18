import "./PanduanSection.scss";

const IntroSection = ({children}) => {
  return (
    <section id="PanduanSection">
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default IntroSection;
