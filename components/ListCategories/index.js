import CardCategory from '../CardCategory'
import { List, Title } from './styles'

const ListCategories = () => {
  const categories = [
    {
      id: '1',
      category: 'Games',
    },
    {
      id: '1',
      category: 'Electronic',
    },
    {
      id: '1',
      category: 'Computers',
    },
    {
      id: '1',
      category: 'Cell phones',
    },
    {
      id: '1',
      category: 'Other',
    },
  ]
  return (
    <List>
      <Title>Categories</Title>
      {categories.map((c) => (
        <CardCategory id={c.id} category={c.category}></CardCategory>
      ))}
    </List>
  )
}

export default ListCategories