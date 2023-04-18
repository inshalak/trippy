import { useState } from 'react';
import './itinerary.css';

function ItineraryPage(props) {
  const [itineraryName, setItineraryName] = useState("");
  const [e1Resolved, setE1Resolved] = useState(false);
  const [e2Resolved, setE2Resolved] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

  const Card = ({ title, content, resolved = true }) => (
    <div style={{ width: '300px', margin: '10px', padding: '20px', border: '1px solid black' }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button>{resolved ? 'resolved' : 'need resolve'}</button>
    </div>
  );

  function handleResolve(event) {
    setE1Resolved(!e1Resolved);
    setE2Resolved(!e2Resolved);
  }

  function handleFormSubmit1(event) {
    event.preventDefault();
    // handle form submission logic here
    setShowForm1(false);
  }

  function handleFormSubmit2(event) {
    event.preventDefault();
    // handle form submission logic here
    setShowForm2(false);
  }

  return (
    <div>
      <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'row' }}>
        <h1>Bahamas</h1>
      </div>
      <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'column' }}>
        <Card title="South Beach" content="this is the detail about south beach"></Card>
        <button onClick={handleResolve}>Resolve!</button>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Card title="Island" content="this is the detail about island" resolved={e1Resolved}></Card>
          <Card title="Smoothie Cafe" content="this is the detail about smoothie cafe" resolved={e2Resolved}></Card>
        </div>
      </div>
      {showForm1 && (
        <div className="form-popup">
          <form className="form" onSubmit={handleFormSubmit1}>
            <label>Name:</label>
            <input type="text" />
            <br />
            <label>Link:</label>
            <input type="text" />
            <br />
            <label>Question:</label>
            <select>
              <option value="q1">What are you most excited about doing here?</option>
              <option value="q2">Question 2</option>
              <option value="q3">Question 3</option>
            </select>
            <br />
            <label>Answer:</label>
            <textarea></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {showForm2 && (
        <div className="form-popup">
          <form className="form" onSubmit={handleFormSubmit2}>
            <label>Name:</label>
            <input type="text" />
            <br />
            <label>Description:</label>
            <textarea></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {!showForm1 && (
        <button onClick={() => setShowForm1(true)}>Add Link!</button>
      )}
      {!showForm2 && (
        <button onClick={() => setShowForm2(true)}>Add Event!</button>
      )}
    </div>
  )
}

export default ItineraryPage;
