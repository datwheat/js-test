import _ from 'lodash';

export default (resources) => {
  const processedResources = [];
  let people = [];
  const sorted = _.sortBy(resources, [o => o.order]);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].type !== 'Person') {
      processedResources.push(sorted[i]);
    } else if (i < sorted.length - 1 && sorted[i + 1].type === 'Person') {
      people.push(sorted[i].name);
    } else {
      people.push(sorted[i].name);
      processedResources.push({
        type: 'Person',
        order: sorted[i].order,
        people,
      });
      people = [];
    }
  }

  return processedResources;
};
