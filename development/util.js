const sampleImages = [
  'https://images.unsplash.com/photo-1561271657-fbad0db4caaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1561214380-cdcaa684cf52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1561187273-0d2494d76346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1561266569-ffd2ec021489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1561087867-203d3c5344d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1561148755-03553117df6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1561155654-20461b26ee4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1561084195-ee7372303a19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
];

/**
 * random pick files
 *
 * @param {Number} count
 * @param {Number} start
 * @return {Array}
 */
export function pickFiles(count = 3, start = 0)
{
  const randomPick = images => images.splice(Math.floor(Math.random() * images.length), 1)[0];
  let images = Object.assign([], sampleImages);
  let result = [];
  for (let i = start; i < start + count; i++)
  {
    let image = randomPick(images);
    if (!image)
    {
      images = Object.assign([], sampleImages);
      image = randomPick(images);
    }
    result.push({
      key: i,
      image,
      active: false,
    });
  }
  return result;
}

/**
 * random pick grid
 *
 * @param {Number} count
 * @param {Number} start
 * @return {Array}
 */
export function pickGrid(count = 3, start = 0)
{
  let result = [];
  for (let i = start; i < start + count; i++)
  {
    result.push({
      key: i,
    });
  }
  return result;
}