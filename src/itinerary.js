import { useState, useSyncExternalStore } from 'react';
import './itinerary.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';




const cardData = [
  [
    {
      date: '3rd May 2020',
      time: '7:00 AM',
      title: 'South Beach',
      description: 'This place is warm and famous for ice creams',
      resolved: false
    }
  ],
  [
    {
      date: '3rd May 2020',
      time: '10:00 AM',
      title: 'Alpaine Museum',
      description: 'National museum of historical figures in Bahamas',
      resolved: false
    }
  ],
]

function ItineraryPage(props) {
  const [itineraryName, setItineraryName] = useState("Bahamas");
  const [e1Resolved, setE1Resolved] = useState(false);
  const [e2Resolved, setE2Resolved] = useState(false);
  const [showForm0, setShowForm0] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [newTime, setNewTime] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")


  const date = '3rd May 2020'
  const times = ['7:00 AM', '10:00 AM', '12:00 PM', '1:40 PM', '3:00 PM', '5:00 PM', '6:45 PM', '7:00 PM']
  const titles = ['South Beach', 'Alpaine Museum', 'Bahamian Rapsody', 'Mountain Polo']
  const descriptions = [
    'This place is warm and famous for ice creams',
    'History Museum of 20th century Bahamas',
    'Famous live jam Club with tons of vibarnt music',
    'The most famous mountain in Bahama'
  ]

  const Card = ({ date, time, title, description, resolved = false }) => (
    // <div style={{ width: '100px', margin: '10px', padding: '20px', border: '1px solid black' }}>
    <div class='card'>
      <div class="timestamp">
        {date}<br/>{time}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button class={resolved ? 'resolved-btn' : 'unresolved-btn'}>{resolved ? 'resolved' : 'need resolve'}</button>
    </div>
  );


  function handleItineraryName(event) {
    setItineraryName(event.target.value)
  }

  function handleResolve(event) {
    const index = event.target.id
    const hcards = cardData[index]

    hcards.forEach(card => card.resolved = true)
    
    renderCards()
  }

  function handleFormSubmit0(event) {
    event.preventDefault();
    // handle form submission logic here
    setShowForm0(false);
  }

  function handleFormSubmit1(event) {
    event.preventDefault();
    // handle form submission logic here
    setShowForm1(false);
  }


  function handleFormSubmit2(event) {
    event.preventDefault();
    // handle form submission logic here

    const testCard = [{
      date,
      time: newTime,
      title: newTitle,
      description: newDescription
    }]
    cardData.push(testCard)
    // console.log(cardData)
    // addVerticalCard()

    renderCards()
    setShowForm2(false);
  }

  function handleItineraryName(event) {
    setItineraryName(event.target.value)
  }
  function handleEventNewTime(event) {
    setNewTime(event.target.value)
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
              {cards.map((card, horizontalIndex) => (
                              <Card 
                              date={cardData[index][horizontalIndex].date} 
                              time={cardData[index][horizontalIndex].time} 
                              title={cardData[index][horizontalIndex].title} 
                              description={cardData[index][horizontalIndex].description} 
                              resolved={cardData[index][horizontalIndex].resolved} />
              ))}
              <div class="horizontal-button-group">
                <button class="horizontal-button" onClick={addHorizontalCard} id={index}>Add</button>
                <button class="horizontal-button" onClick={handleResolve} id={index}>Resolve</button>
              </div>
            </div>
         </li>
        ))}
      </div>,
      document.getElementById('cards')
    )
  }

  const addHorizontalCard = (event) => {
    const index = Math.floor(Math.random() * 4)
    const newCard = {
      date,
      time: cardData.at(event.target.id)[0].time,
      title: titles[index],
      description: descriptions[index]
    } 
    cardData.at(event.target.id).push(newCard)

    renderCards()
    console.log(event.target.id)
  }

  function addVerticalCard() {
    const index = Math.floor(Math.random() * 4)
    const testCard = [{
      date,
      time: times[cardData.length],
      title: titles[index],
      description: descriptions[index]
    }]
    cardData.push(testCard)

    renderCards()
  }

  return (
    <div class="container">
      <div class="header-text">
        <h1>{itineraryName}</h1>
        {!showForm0 && (
            <button class="edit-button"onClick={() => setShowForm0(true)}>Edit</button>
        )}
      </div>
      <Link to="/trip">
        <button class="trip-button">About Trip</button>
      </Link>
      <div class="rightbox">
        <div class="rb-container">
          <ul class="rb" id="cards">
            <li class="rb-item" ng-repeat="itembx">
              <div class="horizontal-cards" id='hcards'>
                <Card 
                    date={cardData[0][0].date} 
                    time={cardData[0][0].time} 
                    title={cardData[0][0].title} 
                    description={cardData[0][0].description} 
                    resolved={cardData[0][0].resolved} />
                <div class="horizontal-button-group">
                  <button class="horizontal-button" onClick={addHorizontalCard} id={0}>Add</button>
                  <button class="horizontal-button" onClick={handleResolve} id={0}>Resolve</button>
                </div>
                  

              </div>
            </li>
            <li class="rb-item" ng-repeat="itembx">
              <div class="horizontal-cards" id='hcards'>
                <Card 
                  date={cardData[1][0].date} 
                  time={cardData[1][0].time} 
                  title={cardData[1][0].title} 
                  description={cardData[1][0].description} 
                  resolved={cardData[1][0].resolved} />
                <div class="horizontal-button-group">
                  <button class="horizontal-button" onClick={addHorizontalCard} id={0}>Add</button>
                  <button class="horizontal-button" onClick={handleResolve} id={0}>Resolve</button>
                </div>
              </div>
            </li>          
          </ul>
        </div>
      </div>
      <div class='buttom-buttons'>
            {/* <button onClick={addVerticalCard}>button</button> */}
            {showForm0 && (
            <div className="form-popup">
              <form className="form" onSubmit={handleFormSubmit0}>
                <label>Itinerary Name:</label>
                <input type="text" value={itineraryName} onChange={handleItineraryName}/>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
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
                <label>Time:</label>
                <input type="text" onChange={handleEventNewTime}/>
                <br />
                <label>Title:</label>
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
  )
}

export default ItineraryPage;

