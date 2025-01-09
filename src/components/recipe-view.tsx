import Image from 'next/image';

type PreparationTimeProps = {
  data: {
    title: string;
    time: string;
  }[];
};

function PreparationTime({ data }: PreparationTimeProps) {
  return (
    <section className="rounded-xl bg-rose-50 p-6">
      <h2 className="font-outfit text-lg font-semibold text-rose-800">Preparation time</h2>
      <ul className="mt-4 space-y-2 pl-2">
        {data.map((item, index) => (
          <li
            key={`${item.title}-${index}`}
            className="relative pl-8 font-outfit text-base text-stone-600 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-brown-800"
          >
            <strong>{item.title}:</strong> {item.time}
          </li>
        ))}
      </ul>
    </section>
  );
}

type IngredientsProps = {
  data: string[];
};

function Ingredients({ data }: IngredientsProps) {
  return (
    <section>
      <h2 className="font-young-serif text-xl text-brown-800">Ingredients</h2>
      <ul className="mt-6 space-y-2 pl-2">
        {data.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="relative pl-8 font-outfit text-base text-stone-600 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-brown-800"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

type InstructionsProps = {
  data: {
    title: string;
    description: string;
  }[];
};

function Instructions({ data }: InstructionsProps) {
  return (
    <section>
      <h2 className="font-young-serif text-xl text-brown-800">Instructions</h2>
      <ol className="mt-6 list-decimal space-y-2 pl-6 marker:font-outfit marker:text-base marker:font-bold marker:text-brown-800">
        {data.map((item, index) => (
          <li key={`${item.title}-${index}`} className="pl-4 font-outfit text-base text-stone-600">
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ol>
    </section>
  );
}

type NutritionProps = {
  data: {
    title: string;
    value: string;
  }[];
};

function Nutrition({ data }: NutritionProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-young-serif text-xl text-brown-800">Nutrition</h2>
      <p className="font-outfit text-base text-stone-600">
        The table below shows nutritional values per serving without the additional fillings.
      </p>
      <table className="w-full">
        <thead>
          <tr>
            <th className="sr-only">Nutrient</th>
            <th className="sr-only">Per Serving</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-150">
          {data.map((item, index) => (
            <tr key={`${item.title}-${index}`}>
              <td className="mr-4 py-3 pl-8 font-outfit text-base text-stone-600">{item.title}</td>
              <td className="py-3 pr-8 font-outfit text-base font-bold text-brown-800">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

type RecipeCardProps = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  preparationTime: {
    title: string;
    time: string;
  }[];
  ingredients: string[];
  instructions: {
    title: string;
    description: string;
  }[];
  nutrition: {
    title: string;
    value: string;
  }[];
};

export function RecipeView({ recipe }: { recipe: RecipeCardProps }) {
  return (
    <div className="size-full bg-white px-8 py-10 md:max-w-md md:rounded-3xl md:p-10 lg:max-w-lg">
      <div className="-mx-8 -mt-10 md:m-auto">
        <div className="relative h-recipe-image w-full">
          <Image
            src={recipe.image.src}
            alt={recipe.image.alt}
            className="object-cover md:rounded-xl"
            priority
            fill
          />
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-young-serif text-2xl text-stone-900 md:text-3xl">{recipe.title}</h1>
        <p className="mt-6 font-outfit text-base text-stone-600">{recipe.description}</p>
        <div className="mt-8">
          <PreparationTime data={recipe.preparationTime} />
          <div className="space-y-8 divide-y divide-stone-100 [&>*]:pt-8">
            <Ingredients data={recipe.ingredients} />
            <Instructions data={recipe.instructions} />
            <Nutrition data={recipe.nutrition} />
          </div>
        </div>
      </div>
    </div>
  );
}
