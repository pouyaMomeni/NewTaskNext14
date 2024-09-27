'use server';

import { FormState } from './page';

async function fetchDataFromAPI({
  title,
  price,
  description,
  image,
  category,
}: FormState) {
  const response = fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    }),
  }).then((res) => res.json());
  return response;
}

export async function saveAndFetchData(inputValues: FormState) {
  // Fetch additional data from an external API
  const fetchedData = await fetchDataFromAPI(inputValues);

  // Return both the saved input value and the fetched data
  return { success: true, data: fetchedData };
}
