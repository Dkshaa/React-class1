import "./Card.css";
const Card = ({name,batch,marks}) => {
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <h1>Student Name: {name}</h1>
          <h4>Student Batch: {batch}</h4>
          <h4>Student Marks: {marks}</h4>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg"
            alt="Anna"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
            culpa necessitatibus? Unde, libero voluptatibus. Distinctio, cumque?
            
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
