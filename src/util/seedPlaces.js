import _ from 'lodash'
import faker from 'faker'

import StockPlaceImage from '../assets/images/clouded-cityscape.jpeg'

const seed = (max = 12) => _.reduce([0], (acc, n) => {
  _.times(_.random(max), () => acc.push({
    key: faker.random.uuid(),
    name: faker.address.city(),
    // image: StockPlaceImage
    image: {
      uri: faker.image.imageUrl()
    }
  }))
  return acc;
}, [])

export default seed