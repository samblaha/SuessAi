import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getAllStories from '@wasp/queries/getAllStories';

export function Dashboard() {
  const { data: stories, isLoading, error } = useQuery(getAllStories);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className="p-4">
      {stories.map((story) => (
        <Link
          key={story.id}
          to={`/story/${story.id}`}
          className="flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg"
        >
          <div>{story.title}</div>
          <div>{story.content}</div>
        </Link>
      ))}
    </div>
  );
}