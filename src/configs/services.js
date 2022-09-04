const BASE_URL = 'https://pokeapi.co/api/v2';


const services = {

  // Course
  GET_POKEMON: `${BASE_URL}/pokemon`,
  GET_DETAIL_POKEMON: (id) => `${BASE_URL}/pokemon/${id}`,
  GET_DETAIL_TYPE: (id) => `${BASE_URL}/type/${id}`,

};

export default services; 
