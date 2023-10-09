import { useState } from 'react';

function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(' ').some((word) => word.toLowerCase().startsWith(query))
  );
}

const foods = [
  {
    id: 0,
    name: 'Sushi',
    description:
      'Sushi is a traditional Japanese dish of prepared vinegared rice',
  },
  {
    id: 1,
    name: 'Dal',
    description:
      'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added',
  },
  {
    id: 2,
    name: 'Pierogi',
    description:
      'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water',
  },
  {
    id: 3,
    name: 'Shish kebab',
    description:
      'Shish kebab is a popular meal of skewered and grilled cubes of meat.',
  },
  {
    id: 4,
    name: 'Dim sum',
    description:
      'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch',
  },
];

function SearchBar({ query, change }) {
  return (
    <label>
      Search: <input value={query} onChange={change} />
    </label>
  );
}

function List({ items, query }) {
  const filtered = filterItems(items, query);

  return (
    <table>
      <tbody>
        {filtered.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function App() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} change={(e) => handleChange(e)} />
      <hr />
      <List items={foods} query={query} />
    </>
  );
}

// When you want to coordinate multiple components:
// 1. Remove state from the child components to their common parent
// 2. Pass information down from the common parent, through props
// 3. Add state to the common parent and pass it down together with the event
//    handlers, so that the children can change the parent's state.
