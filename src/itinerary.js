import { useState } from 'react';
import './itinerary.css'

function ItineraryPage(props) {
  const [itineraryName, setItineraryName] = useState("");
  const [e1Resolved, setE1Resolved] = useState(false);
  const [e2Resolved, setE2Resolved] = useState(false);
  

  const Card = ({ title, content, resolved = true }) => (
    <div style={{ width: '300px', margin: '10px', padding: '20px', border: '1px solid black' }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button>{resolved ? 'resolved' : 'need resolve'}</button>
    </div>
  );  
  

  function handleResolve(event) {
    setE1Resolved(!e1Resolved)
    setE2Resolved(!e2Resolved)
  }
  
  return (
    <div>
      <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'row'}}>
        <h1>Bahamas</h1>
      </div>
      <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'column'}}>
        <Card title="South Beach" content="this is the detail about south beach">
        </Card>
        <button onClick={handleResolve}>Resolve!</button>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
        <Card title="Island" content="this is the detail about island" resolved={e1Resolved}></Card>
        <Card title="Smoothie Cafe" content="this is the detail about smoothie cafe" resolved={e2Resolved}></Card>
        </div>
      </div>
    </div>
  )
}

export default ItineraryPage;