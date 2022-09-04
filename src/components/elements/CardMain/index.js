import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export default function CardMain(props) {
  const { name, url } = props;
  const router = useRouter();

  const id = url?.replace('https://pokeapi.co/api/v2/pokemon/', '') || 0;

  const handleClick = () => {
    router.push({
      pathname: `/detail-pokemon/${id}`,
    });
  };
  return (
    <div
      className="w-full border rounded-lg px-5 py-4 cursor-pointer flex items-center"
      onClick={handleClick}
    >
      <div className="w-10 h-10 bg-yellow-400 flex justify-center items-center rounded-full mr-3">
        <h3 className="text-3xl font-semibold text-white capitalize">{Array.from(name)[0]}</h3>
      </div>
      <h3 className="text-center text-xl font-medium capitalize">{name}</h3>
    </div>
  );
}

CardMain.defaultProps = {
  name: () => {},
  url: {},
};

CardMain.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};
