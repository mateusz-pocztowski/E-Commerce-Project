export const featuredEndP = 'featured=true';

export const categoryEndP = categories => {
  return categories.map(name => `&category.name_contains=${name}`).join('');
};

export const priceEndP = ({ min, max }) => `&price_gte=${min}&price_lte=${max}`;

export const sortEndP = type => {
  switch (type) {
    case 'priceASC':
      return '&_sort=price:ASC';
    case 'priceDESC':
      return '&_sort=price:DESC';
    case 'alphabetASC':
      return '&_sort=name:ASC';
    case 'alphabetDESC':
      return '&_sort=name:DESC';
    default:
      return '';
  }
};

export const searchEndP = value => (value ? `&name_containss=${value}` : '');
