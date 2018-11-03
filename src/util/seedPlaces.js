import _ from 'lodash'
import faker from 'faker'

import StockPlaceImage from '../assets/images/clouded-cityscape.jpeg'

const seed = (min = 6, max = 12) => _.reduce([0], (acc, n) => {
  _.times(_.random(min, max), () => acc.push({
    key: faker.random.uuid(),
    name: faker.address.city(),
    image: StockPlaceImage,
    likes: 0,
    dislikes: 0
    // likes: _.random(1, 100),
    // dislikes: _.random(1, 100)
  }))
  return acc;
}, [])

export default seed