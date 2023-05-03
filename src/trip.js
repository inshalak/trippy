
import { useState, useRef, useEffect } from 'react';
import './trip.css';
import pin from './imgs/pin.png';
import logo from './imgs/logo.png';

function TripPage() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [showTagInput, setShowTagInput] = useState(false);
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState('');
  const [showIdeaInput, setShowIdeaInput] = useState(false);
  const [budget, setBudget] = useState("");
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const containerRef = useRef(null);
  const [draggedIdeaIndex, setDraggedIdeaIndex] = useState(-1);
  const [droppedIdeaIndex, setDroppedIdeaIndex] = useState(-1);


  const handleIdeaDragEnd = (event, index) => {
    setDraggedIdeaIndex(-1);
  };
  
  const handleIdeaDrop = (event, index) => {
    event.preventDefault();
    const newIdeas = [...ideas];
    newIdeas.splice(draggedIdeaIndex, 1);
    newIdeas.splice(index, 0, ideas[draggedIdeaIndex]);
    setIdeas(newIdeas);
    setDroppedIdeaIndex(index);
  };
  


  const handleAddTag = () => {  
    if (newTag.trim() !== '') {
      const formattedTag = `#${newTag.trim()}`;
      setTags([...tags,  formattedTag ]);
      setNewTag('');
      setShowTagInput(false);
    }
  };

  const handleNewTagChange = (event) => {  
    setNewTag(event.target.value);
  };

  const handleAddIdea = () => {
    if (newIdea.trim() !== '') {
      setIdeas([...ideas, newIdea]);
      setNewIdea('');
      setShowIdeaInput(false);
    }
  };

  const handleNewIdeaChange = (event) => {
    setNewIdea(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const startEditingBudget = () => {
    setIsEditingBudget(true);
  };

  const stopEditingBudget = () => {
    setIsEditingBudget(false);
  };

  const handleCreatePoll = () => {
    // handle poll creation logic here
  };

  useEffect(() => {
    containerRef.current = document.body;
  }, []);

  const handleTagDragEnd = (event, index) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const tagRect = event.currentTarget.getBoundingClientRect();
      if (
        tagRect.bottom < containerRect.top ||
        tagRect.top > containerRect.bottom ||
        tagRect.right < containerRect.left ||
        tagRect.left > containerRect.right
      ) {
        setTags(tags.filter((_, i) => i !== index));
      }
    }
  };



  return (
    <div className="trip-container">
     <img class = "pin" src= {pin} height = "60px" width = "60px"  alt="" className="idea-image" /> 
         <h1>bahamas 
         <div className="bubble">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
</div> </h1>

 <div className="input-group">
        <label>tags</label>
        <div className="tag-group">
        {tags.map((tag, index) => (
  <button
    key={index}
    className="tag-button"
    draggable="true"
    onDragEnd={(event) => handleTagDragEnd(event, index)}
  >
    {tag}
  </button>
))}
          {showTagInput ? (
            <div>
              <input type="text" value={newTag} placeholder="Add Tag" onChange={handleNewTagChange} />
              <button onClick={handleAddTag}>Add</button>
            </div>
          ) : (
            <button onClick={() => setShowTagInput(true)}>+</button>
          )}
        </div>
      </div>
      <div className="input-group">
        <label>ideas</label>
        <div>
          {ideas.map((idea, index) => (
            <button key={index} className="idea-button" draggable = "true" 
            onDragStart={() => setDraggedIdeaIndex(index)}
            style = {{display: "flex"}} onDragOver={(event) => {
              event.preventDefault();
              setDroppedIdeaIndex(index);
            }} onDragEnd={() => {
              if (droppedIdeaIndex !== -1 && droppedIdeaIndex !== draggedIdeaIndex) {
                const newIdeas = [...ideas];
                newIdeas.splice(droppedIdeaIndex, 0, newIdeas.splice(draggedIdeaIndex, 1)[0]);
                setIdeas(newIdeas);
              }
              setDraggedIdeaIndex(-1);
              setDroppedIdeaIndex(-1);
            }}
            onDrop={(event) => {
              const newIdeas = [...ideas];
              newIdeas.splice(draggedIdeaIndex, 1);
              newIdeas.splice(draggedIdeaIndex, 0, ideas[draggedIdeaIndex]);
              setIdeas(newIdeas);
              setDraggedIdeaIndex(-1);
            }}
            
           > {idea} </button>
          ))}
          <div
 
  
></div>
        </div>
        {showIdeaInput ? (
          <div>
            <input type="text" value={newIdea} placeholder="Add Idea" onChange={handleNewIdeaChange} />
            <button onClick={handleAddIdea}>Add</button>
          </div>
        ) : (
          <button onClick={() => setShowIdeaInput(true)}>+</button>
        )}
      </div>
      <div className="input-group">
        <label>budget</label>
        <div>
          {isEditingBudget ? (
            <input
              type="text"
              value={budget}
              onChange={handleBudgetChange}
              onBlur={stopEditingBudget}
              autoFocus
            />
          ) : (
            <button onClick={startEditingBudget}>
              {budget || 'Set budget'}
            </button>
          )}
        </div>
      </div>
      <div>
        <button onClick={handleCreatePoll}>Create Poll</button>
      </div>
    </div>

  )
}

export default TripPage;
