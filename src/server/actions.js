import HttpError from '@wasp/core/HttpError.js'

export const createStory = async (args, context) => {
  const { title, childName, childAge } = args;
  const { user, entities } = context;

  if (!user) { throw new HttpError(401); }

  const content = generateStory(childName, childAge);

  const createdStory = await entities.Story.create({
    data: {
      title,
      content,
      illustration: '',
      userId: user.id
    }
  });

  return createdStory;
}