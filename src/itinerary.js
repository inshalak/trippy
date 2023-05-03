import { useState, useSyncExternalStore } from 'react';
import './itinerary.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import pin from './imgs/pin.png';
import logo from './imgs/logo.png';


const cardData = [
  [
    {
      date: '3rd May 2023',
      time: '9:00 AM',
      title: 'Scuba Diving',
      description: 'Explore the beautiful underwater world of the Bahamas',
      resolved: false
    }
  ],
  [
    {
      date: '3rd May 2023',
      time: '1:00 PM',
      title: 'Beach Picnic',
      description: 'Enjoy a relaxing picnic on one of the many pristine beaches',
      resolved: false
    }
  ],
  [
    {
      date: '3rd May 2023',
      time: '5:00 PM',
      title: 'Sunset Cruise',
      description: 'Watch the sun go down on a scenic boat ride',
      resolved: false
    }
  ]
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

  const date = '3rd May 2023'
  const times = ['9:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM']
  const titles = ['Beach Volleyball', 'Art Gallery Tour', 'Bahamian Cuisine Tasting', 'Catamaran Adventure', 'Live Music at Fish Fry']
  const descriptions = [
    'Join a friendly game of beach volleyball with locals and tourists alike',
    'Explore the local art scene with a guided tour of the island\'s best galleries',
    'Sample the delicious and unique flavors of Bahamian cuisine on a food tour',
    'Take a catamaran out to sea and snorkel in the crystal clear waters of the Bahamas',
    'Experience the vibrant nightlife of the Fish Fry with live music and delicious drinks'
  ]

  const Card = ({ date, time, title, description, resolved = false }) => (
    // <div style={{ width: '100px', margin: '10px', padding: '20px', border: '1px solid black' }}>
    <div class='card'>
      <div class="timestamp">
        {date}<br/>{time}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className = "sub" class={resolved ? 'resolved-btn' : 'unresolved-btn'}>{resolved ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg>}</button>
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
       <img class = "pin" src= {pin} height = "60px" width = "60px"  alt="" className="idea-image" /> 
         <h1>bahamas 
         <div className="bubble">
         <Link to="/trip">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
      </Link>
</div> </h1>
      
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
