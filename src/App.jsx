const recipes = [
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
  },
  {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: [
      'pizza crust',
      'pizza sauce',
      'mozzarella',
      'ham',
      'pineapple',
    ],
  },
  {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'],
  },
];

function getRecipes() {
  return recipes.map((recipe) => (
    <li key={recipe.id}>{`
    Recipe: ${recipe.name}.
    Ingredients: ${recipe.ingredients.map((ingredient) => ` ${ingredient}`)}
    `}</li>
  ));
}

function App() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{getRecipes()}</ul>
    </div>
  );
}

export default App;
