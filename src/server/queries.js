import HttpError from '@wasp/core/HttpError.js'

export const getStory = async ({ storyId }, context) => {
  if (!context.user) { throw new HttpError(401) }

  const story = await context.entities.Story.findUnique({
    where: { id: storyId },
    include: { user: true }
  });

  if (!story) throw new HttpError(404, 'No story with id ' + storyId);

  if (story.user.id !== context.user.id) throw new HttpError(400);

  return story;
}

export const getAllStories = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const stories = await context.entities.Story.findMany({
    where: {
      userId: context.user.id
    }
  });

  return stories;
}