import { useState, useSyncExternalStore } from 'react';
import './itinerary.css';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';


function ItineraryPage(props) {
  const [itineraryName, setItineraryName] = useState("");
  const [e1Resolved, setE1Resolved] = useState(false);
  const [e2Resolved, setE2Resolved] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")

  const Card = ({ title, content, resolved = true }) => (
    <div style={{ width: '100px', margin: '10px', padding: '20px', border: '1px solid black' }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button>{resolved ? 'resolved' : 'need resolve'}</button>
    </div>
  );

  const cardData = [
    [
      {
        title: 'card 1',
        description: 'card 1 desc'
      }
    ],
    [
      {
        title: 'card 2',
        description: 'card 2 desc'
      }
    ],
    [
      {
        title: 'card 3',
        description: 'card 3 desc'
      }
    ]
  ]

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

    const newCard = {
      title: newTitle,
      description: newDescription
    }
    addVerticalCard()
    setShowForm2(false);
  }

  function handleEventNewTitle(event) {
    setNewTitle(event.target.value)
  }

  function handleEventNewDescription(event) {
    setNewDescription(event.target.value)
  }

  const renderCards = () => {
    ReactDOM.render(
      <div>
        {cardData.map((cards, index) => (
          <li class="rb-item" ng-repeat="itembx">
            <div class="horizontal-cards" id='hcards'>
              {cards.map((card) => (
                <Card title="Island" content="this is the detail about island" resolved={true}></Card>
              ))}
              <button onClick={addHorizontalCard}>Add</button>
            </div>
         </li>
        ))}
      </div>,
      document.getElementById('cards')
    )
  }

  const addHorizontalCard = (event) => {
    const newCard = {
      title: 'add',
      description: 'te'
    }
    cardData.at(event.target.id).push(newCard)

    renderCards()
    console.log(event.target.id)
  }

  function addVerticalCard() {
    const testCard = [{
      title: 'test',
      description: 'test description'
    }]
    cardData.push(testCard)

    renderCards()
  }

  // return (
  //   <div>
  //     <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'row' }}>
  //       <h1>Bahamas</h1>
  //     </div>
  //     <div id="test">
  //       <Card
  //         title="Card 1"

  //       />
  //       <Card
  //         title="Card 2"

  //       />
  //       <Card
  //         title="Card 3"

  //       />
  //     </div>
  //     <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'column' }}>
  //       <Card title="South Beach" content="this is the detail about south beach"></Card>
  //       <button onClick={handleResolve}>Resolve!</button>
  //       <div style={{ display: 'flex', flexDirection: 'row' }}>
  //         <Card title="Island" content="this is the detail about island" resolved={e1Resolved}></Card>
  //         <Card title="Smoothie Cafe" content="this is the detail about smoothie cafe" resolved={e2Resolved}></Card>
  //       </div>
  //     </div>
      // {showForm1 && (
      //   <div className="form-popup">
      //     <form className="form" onSubmit={handleFormSubmit1}>
      //       <label>Name:</label>
      //       <input type="text" />
      //       <br />
      //       <label>Link:</label>
      //       <input type="text" />
      //       <br />
      //       <label>Question:</label>
      //       <select>
      //         <option value="q1">What are you most excited about doing here?</option>
      //         <option value="q2">Question 2</option>
      //         <option value="q3">Question 3</option>
      //       </select>
      //       <br />
      //       <label>Answer:</label>
      //       <textarea></textarea>
      //       <br />
      //       <button type="submit">Submit</button>
      //     </form>
      //   </div>
      // )}
      // {showForm2 && (
      //   <div className="form-popup">
      //     <form className="form" onSubmit={handleFormSubmit2}>
      //       <label>Name:</label>
      //       <input type="text" />
      //       <br />
      //       <label>Description:</label>
      //       <textarea></textarea>
      //       <br />
      //       <button type="submit">Submit</button>
      //     </form>
      //   </div>
      // )}
      // {!showForm1 && (
      //   <button onClick={() => setShowForm1(true)}>Add Link!</button>
      // )}
      // {!showForm2 && (
      //   <button onClick={() => setShowForm2(true)}>Add Event!</button>
      // )}
  //   </div>
  // )
  return (
    <div class="container">
      <div class="rightbox">
        <div class="rb-container">
          <ul class="rb" id="cards">
            <li class="rb-item" ng-repeat="itembx">
              <div class="card">
                <div class="timestamp">
                  3rd May 2020 7:00 PM
                </div>
                <div class="card-body">
                  <div class="item-title">Chris Serrano posted a photo on your wall.</div>
                </div>
              </div>
            </li>
            <li class="rb-item" ng-repeat="itembx">
              <div class="card">
                <div class="timestamp">
                  19th May 2020 3:00 PM
                </div>
                <div class="card-body">
                  <div class="item-title">Mia Redwood commented on your last post.</div>
                </div>
              </div>
            </li>
            <li class="rb-item" ng-repeat="itembx">
              <div class="card">
                <div class="timestamp">
                  17st June 2020 7:00 PM
                </div>
                <div class="card-body">
                  <div class="item-title">Lucas McAlister just send you a message.</div>
                </div>
              </div>
            </li>
              
          </ul>
          <button onClick={addVerticalCard}>button</button>
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
            <input type="text" onChange={handleEventNewTitle}/>
            <br />
            <label>Description:</label>
            <input type="text" onChange={handleEventNewDescription}/>
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
      </div>
    </div>
    )
}

export default ItineraryPage;

