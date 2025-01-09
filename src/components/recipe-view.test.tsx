import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { RecipeView } from './recipe-view';

const recipe = {
  title: 'Simple Omelette Recipe',
  description:
    'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
  image: {
    src: '/image-omelette.jpeg',
    alt: 'Omelette with cheese and vegetables',
  },
  preparationTime: [
    {
      title: 'Total',
      time: 'Approximately 10 minutes',
    },
    {
      title: 'Preparation',
      time: '5 minutes',
    },
    {
      title: 'Cooking',
      time: '5 minutes',
    },
  ],
  ingredients: [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ],
  instructions: [
    {
      title: 'Beat the eggs',
      description:
        'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      title: 'Heat the pan',
      description: 'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      title: 'Cook the omelette',
      description:
        'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      title: 'Add fillings (optional)',
      description:
        'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      title: 'Fold and serve',
      description:
        'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      title: 'Enjoy',
      description: 'Serve hot, with additional salt and pepper if needed.',
    },
  ],
  nutrition: [
    {
      title: 'Calories',
      value: '277kcal',
    },
    {
      title: 'Carbs',
      value: '0g',
    },
    {
      title: 'Protein',
      value: '20g',
    },
    {
      title: 'Fat',
      value: '22g',
    },
  ],
};

describe('renders the recipe view component with the provided recipe', () => {
  beforeEach(() => {
    render(<RecipeView recipe={recipe} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the recipe title and description', () => {
    expect(screen.getByRole('heading', { name: recipe.title })).toBeDefined();
    expect(screen.getByText(recipe.description)).toBeDefined();
  });

  it('renders the recipe image with alt text', () => {
    expect(screen.getByRole('img', { name: recipe.image.alt })).toBeDefined();
  });

  it('renders each preparation time element', () => {
    const listItems = screen.getAllByRole('listitem');
    recipe.preparationTime.forEach((timeItem) => {
      expect(listItems.map((item) => item.textContent)).toContain(
        `${timeItem.title}: ${timeItem.time}`,
      );
    });
  });

  it('renders each ingredient element', () => {
    const listItems = screen.getAllByRole('listitem');
    recipe.ingredients.forEach((ingredient) => {
      expect(listItems.map((item) => item.textContent)).toContain(ingredient);
    });
  });

  it('renders each instruction element', () => {
    const listItems = screen.getAllByRole('listitem');
    recipe.instructions.forEach((instruction) => {
      expect(listItems.map((item) => item.textContent)).toContain(
        `${instruction.title}: ${instruction.description}`,
      );
    });
  });

  it('renders each nutrition element', () => {
    const tableCells = screen.getAllByRole('cell');

    recipe.nutrition.forEach((nutritionItem) => {
      expect(tableCells.map((cell) => cell.textContent)).toContain(nutritionItem.title);
    });
  });
});
