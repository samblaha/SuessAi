import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getStory from '@wasp/queries/getStory';

export function Story() {
  const { storyId } = useParams();
  const { data: story, isLoading, error } = useQuery(getStory, { storyId });

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>{story.title}</h1>
      <p className='mb-4'>{story.content}</p>
      <img src={story.illustration} alt='Story Illustration' className='max-w-full mx-auto' />
    </div>
  );
}