import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAction } from '@wasp/actions';
import createStory from '@wasp/actions/createStory';

export function CreateStory() {
  const [title, setTitle] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState(0);

  const createStoryFn = useAction(createStory);
  const history = useHistory();

  const handleSubmit = () => {
    createStoryFn({ title, childName, childAge })
      .then((createdStory) => {
        history.push(`/story/${createdStory.id}`);
      })
      .catch((error) => {
        console.error('Failed to create story:', error);
      });
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-1 py-2 border rounded text-lg"
      />
      <input
        type="text"
        placeholder="Child's Name"
        value={childName}
        onChange={(e) => setChildName(e.target.value)}
        className="px-1 py-2 border rounded text-lg"
      />
      <input
        type="number"
        placeholder="Child's Age"
        value={childAge}
        onChange={(e) => setChildAge(Number(e.target.value))}
        className="px-1 py-2 border rounded text-lg"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Story
      </button>
    </div>
  );
}