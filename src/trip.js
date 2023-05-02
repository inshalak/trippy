import { useState } from 'react';
import './trip.css';

function TripPage() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [showTagInput, setShowTagInput] = useState(false);
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState('');
  const [showIdeaInput, setShowIdeaInput] = useState(false);
  const [budget, setBudget] = useState("");
  const [isEditingBudget, setIsEditingBudget] = useState(false);

  const handleAddTag = () => {  
    if (newTag.trim() !== '') {
      setTags([...tags, newTag]);
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

  return (
    <div className="trip-container">
      <div className="input-group">
        <label>Tags:</label>
        <div className="tag-group">
          {tags.map((tag, index) => (
            <button key={index} className="tag-button">{tag}</button>
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
        <label>Ideas:</label>
        <div>
          {ideas.map((idea, index) => (
            <button key={index} className="idea-button">{idea}</button>
          ))}
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
        <label>Budget:</label>
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
