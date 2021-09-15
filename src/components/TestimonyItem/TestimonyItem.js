import "./TestimonyItem.scss";

const TestimonyItem = ({ name, institution, text, picture }) => {
  return (
    <div id="TestimonyItem">
      <div className="card shadow">
        <div className="card-body text-center">
          <img
            className="testimony-img rounded-circle d-block mx-auto"
            src={picture}
            alt={name}
          />
          <h5 className="username">
            <strong><small>{name}</small></strong>
          </h5>
          <h6>
            <small>{institution}</small>
          </h6>
          <p className="text-muted mt-3" style={{ fontStyle: "italic" }}>
            "<small>{text}</small>"
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyItem;
