import React, { useState, useEffect } from 'react';
import PageBase from '../../layouts/PageBase';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from './action';
import CardMain from '../../elements/CardMain';
import Image from 'next/image';
import { IMAGES } from '../../../configs';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [dataPokemon, setDataPokemon] = useState([]);
  const [filter, setFilter] = useState('1-999');

  const {
    dataType: { name, pokemon = [], moves = [], damage_relations },
  } = useSelector((state) => state.type || {});
  const { isLoading } = useSelector((state) => state.loading || {});


  const options = [
    {
      label: 'A-Z',
      value: 'A-Z',
    },
    {
      label: 'Z-A',
      value: 'Z-A',
    },
    {
      label: '1-999',
      value: '1-999',
    },
    {
      label: '999-1',
      value: '999-1',
    },
  ];


  useEffect(() => {
    id && dispatch(getType(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  const handleGetId = (url) => {
    const id =
      url?.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '') || 0;
    return Number(id);
  };

  const handleDataPokemon = (value) => {
    setFilter(value);
    if (value === 'A-Z') {
      const sorted = pokemon.sort((a, b) =>
        a.pokemon.name > b.pokemon.name ? 1 : -1
      );
      setDataPokemon(sorted);
    } else if (value === 'Z-A') {
      const sorted = pokemon.sort((a, b) =>
        a.pokemon.name < b.pokemon.name ? 1 : -1
      );
      setDataPokemon(sorted);
    } else if (value === '1-999') {
      const sorted = pokemon.sort((a, b) =>
      handleGetId(a.pokemon.url) - handleGetId(b.pokemon.url));
      setDataPokemon(sorted);
    } else if (value === '999-1') {
      const sorted = pokemon.sort((a, b) =>
      handleGetId(b.pokemon.url) - handleGetId(a.pokemon.url));
      setDataPokemon(sorted);
    }
  };

  const handleClickNext = () => {
    router.push({
      pathname: `/types/${Number(id) + 1}`,
    });
  };

  const handleClickPrev = () => {
    router.push({
      pathname: `/types/${Number(id) - 1}`,
    });
  };

  const handleBytype = (url) => {
    const TypeId = url?.replace('https://pokeapi.co/api/v2/type/', '').replace('/', '') || 0;;
    router.push({
      pathname: `/types/${Number(TypeId)}`,
    });
  };

  const renderDetail = () => {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center pb-5">
          <h3 className="md:text-3xl text-lg capitalize font-bold md:py-4 pr-6">
            {name}
          </h3>
          <div>
            {Number(id) > 1 && (
              <button
                className="mr-4 md:w-10 w-7 pt-2"
                onClick={handleClickPrev}
              >
                <Image
                  alt="prev"
                  height="40"
                  src={IMAGES.ARROW_LEFT}
                  width="40"
                />
              </button>
            )}
            {Number(id) < 18 && (
              <button className="md:w-10 w-7 pt-2" onClick={handleClickNext}>
                <Image
                  alt="next"
                  height="40"
                  src={IMAGES.ARROW_RIGHT}
                  width="40"
                />
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 order-last md:order-first">
            <div className="text-xl pb-3">
              <p>double damage from:</p>
              {damage_relations?.double_damage_from.map((ab, key) => {
                return (
                  <>
                    <button
                      className={clsx('rounded w-auto h-8 px-3 mx-1 my-1', {
                        'bg-gray-300': ab.name === 'normal',
                        'bg-green-400 text-white': ab.name === 'fighting',
                        'bg-green-600 text-white': ab.name === 'flying',
                        'bg-green-700 text-white': ab.name === 'poison',
                        'bg-gray-500 text-white': ab.name === 'ground',
                        'bg-gray-700 text-white': ab.name === 'rock',
                        'bg-yellow-600 text-white': ab.name === 'bug',
                        'bg-gray-400 text-gray-100': ab.name === 'ghost',
                        'bg-gray-700 text-white': ab.name === 'steel',
                        'bg-red-600 text-white': ab.name === 'fire',
                        'bg-blue-400': ab.name === 'water',
                        'bg-green-400': ab.name === 'grass',
                        'bg-blue-600 text-white': ab.name === 'electric',
                        'bg-blue-300': ab.name === 'psychic',
                        'bg-blue-200': ab.name === 'ice',
                        'bg-red-700 text-white': ab.name === 'dragon',
                        'bg-black text-white': ab.name === 'dark',
                        'bg-yellow-400 text-white': ab.name === 'fairy',
                      })}
                      key={key}
                      onClick={() => handleBytype(ab.url)}
                    >
                      {ab.name}
                    </button>
                  </>
                );
              })}
            </div>
            <div className="text-xl pb-3">
              <p>double damage to:</p>
              {damage_relations?.double_damage_to.map((ab, key) => {
                return (
                  <>
                    <button
                      className={clsx('rounded w-auto h-8 px-3 mx-1 my-1', {
                        'bg-gray-300': ab.name === 'normal',
                        'bg-green-400 text-white': ab.name === 'fighting',
                        'bg-green-600 text-white': ab.name === 'flying',
                        'bg-green-700 text-white': ab.name === 'poison',
                        'bg-gray-500 text-white': ab.name === 'ground',
                        'bg-gray-700 text-white': ab.name === 'rock',
                        'bg-yellow-600 text-white': ab.name === 'bug',
                        'bg-gray-400 text-gray-100': ab.name === 'ghost',
                        'bg-gray-700 text-white': ab.name === 'steel',
                        'bg-red-600 text-white': ab.name === 'fire',
                        'bg-blue-400': ab.name === 'water',
                        'bg-green-400': ab.name === 'grass',
                        'bg-blue-600 text-white': ab.name === 'electric',
                        'bg-blue-300': ab.name === 'psychic',
                        'bg-blue-200': ab.name === 'ice',
                        'bg-red-700 text-white': ab.name === 'dragon',
                        'bg-black text-white': ab.name === 'dark',
                        'bg-yellow-400 text-white': ab.name === 'fairy',
                      })}
                      key={key}
                      onClick={() => handleBytype(ab.url)}
                    >
                      {ab.name}
                    </button>
                  </>
                );
              })}
            </div>
            <div className="text-xl pb-3">
              <p>half damage from:</p>
              {damage_relations?.half_damage_from.map((ab, key) => {
                return (
                  <>
                    <button
                      className={clsx('rounded w-auto h-8 px-3 mx-1 my-1', {
                        'bg-gray-300': ab.name === 'normal',
                        'bg-green-400 text-white': ab.name === 'fighting',
                        'bg-green-600 text-white': ab.name === 'flying',
                        'bg-green-700 text-white': ab.name === 'poison',
                        'bg-gray-500 text-white': ab.name === 'ground',
                        'bg-gray-700 text-white': ab.name === 'rock',
                        'bg-yellow-600 text-white': ab.name === 'bug',
                        'bg-gray-400 text-gray-100': ab.name === 'ghost',
                        'bg-gray-700 text-white': ab.name === 'steel',
                        'bg-red-600 text-white': ab.name === 'fire',
                        'bg-blue-400': ab.name === 'water',
                        'bg-green-400': ab.name === 'grass',
                        'bg-blue-600 text-white': ab.name === 'electric',
                        'bg-blue-300': ab.name === 'psychic',
                        'bg-blue-200': ab.name === 'ice',
                        'bg-red-700 text-white': ab.name === 'dragon',
                        'bg-black text-white': ab.name === 'dark',
                        'bg-yellow-400 text-white': ab.name === 'fairy',
                      })}
                      key={key}
                      onClick={() => handleBytype(ab.url)}
                    >
                      {ab.name}
                    </button>
                  </>
                );
              })}
            </div>
            <div className="text-xl pb-3">
              <p>half damage to:</p>
              {damage_relations?.half_damage_to.map((ab, key) => {
                return (
                  <>
                    <button
                      className={clsx('rounded w-auto h-8 px-3 mx-1 my-1', {
                        'bg-gray-300': ab.name === 'normal',
                        'bg-green-400 text-white': ab.name === 'fighting',
                        'bg-green-600 text-white': ab.name === 'flying',
                        'bg-green-700 text-white': ab.name === 'poison',
                        'bg-gray-500 text-white': ab.name === 'ground',
                        'bg-gray-700 text-white': ab.name === 'rock',
                        'bg-yellow-600 text-white': ab.name === 'bug',
                        'bg-gray-400 text-gray-100': ab.name === 'ghost',
                        'bg-gray-700 text-white': ab.name === 'steel',
                        'bg-red-600 text-white': ab.name === 'fire',
                        'bg-blue-400': ab.name === 'water',
                        'bg-green-400': ab.name === 'grass',
                        'bg-blue-600 text-white': ab.name === 'electric',
                        'bg-blue-300': ab.name === 'psychic',
                        'bg-blue-200': ab.name === 'ice',
                        'bg-red-700 text-white': ab.name === 'dragon',
                        'bg-black text-white': ab.name === 'dark',
                        'bg-yellow-400 text-white': ab.name === 'fairy',
                      })}
                      key={key}
                      onClick={() => handleBytype(ab.url)}
                    >
                      {ab.name}
                    </button>
                  </>
                );
              })}
            </div>
            <div className="text-xl pb-3">
              <p>no damage from:</p>
              {damage_relations && damage_relations.no_damage_from.length
                ? damage_relations?.no_damage_from.map((ab, key) => {
                    return (
                      <>
                        <button
                          className={clsx('rounded w-auto h-8 px-3 mx-1 my-1', {
                            'bg-gray-300': ab.name === 'normal',
                            'bg-green-400 text-white': ab.name === 'fighting',
                            'bg-green-600 text-white': ab.name === 'flying',
                            'bg-green-700 text-white': ab.name === 'poison',
                            'bg-gray-500 text-white': ab.name === 'ground',
                            'bg-gray-700 text-white': ab.name === 'rock',
                            'bg-yellow-600 text-white': ab.name === 'bug',
                            'bg-gray-400 text-gray-100': ab.name === 'ghost',
                            'bg-gray-700 text-white': ab.name === 'steel',
                            'bg-red-600 text-white': ab.name === 'fire',
                            'bg-blue-400': ab.name === 'water',
                            'bg-green-400': ab.name === 'grass',
                            'bg-blue-600 text-white': ab.name === 'electric',
                            'bg-blue-300': ab.name === 'psychic',
                            'bg-blue-200': ab.name === 'ice',
                            'bg-red-700 text-white': ab.name === 'dragon',
                            'bg-black text-white': ab.name === 'dark',
                            'bg-yellow-400 text-white': ab.name === 'fairy',
                          })}
                          key={key}
                          onClick={() => handleBytype(ab.url)}
                        >
                          {ab.name}
                        </button>
                      </>
                    );
                  })
                : '-'}
            </div>
            <div className="text-xl pb-3">
              <p>no damage to:</p>
              {damage_relations && damage_relations.no_damage_to.length
                ? damage_relations?.no_damage_to.map((ab, key) => {
                    return (
                      <>
                        <button
                          className={clsx('rounded w-auto h-8 px-3 mx-1 my-1', {
                            'bg-gray-300': ab.name === 'normal',
                            'bg-green-400 text-white': ab.name === 'fighting',
                            'bg-green-600 text-white': ab.name === 'flying',
                            'bg-green-700 text-white': ab.name === 'poison',
                            'bg-gray-500 text-white': ab.name === 'ground',
                            'bg-gray-700 text-white': ab.name === 'rock',
                            'bg-yellow-600 text-white': ab.name === 'bug',
                            'bg-gray-400 text-gray-100': ab.name === 'ghost',
                            'bg-gray-700 text-white': ab.name === 'steel',
                            'bg-red-600 text-white': ab.name === 'fire',
                            'bg-blue-400': ab.name === 'water',
                            'bg-green-400': ab.name === 'grass',
                            'bg-blue-600 text-white': ab.name === 'electric',
                            'bg-blue-300': ab.name === 'psychic',
                            'bg-blue-200': ab.name === 'ice',
                            'bg-red-700 text-white': ab.name === 'dragon',
                            'bg-black text-white': ab.name === 'dark',
                            'bg-yellow-400 text-white': ab.name === 'fairy',
                          })}
                          key={key}
                          onClick={() => handleBytype(ab.url)}
                        >
                          {ab.name}
                        </button>
                      </>
                    );
                  })
                : '-'}
            </div>
            <div className="flex">
              <p className="text-xl flex">pokemon filter by:</p>
              <select
                className="border-2 px-3 rounded-md ml-3"
                value={filter}
                onChange={(e) => handleDataPokemon(e.target.value)}
              >
                {options.map((option, key) => (
                  <option key={key} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-2">
              {dataPokemon.length? dataPokemon.map((ab, key) => (
                <CardMain
                  key={key}
                  name={ab.pokemon.name}
                  url={ab.pokemon.url}
                />
              )): pokemon.map((ab, key) => (
                <CardMain
                  key={key}
                  name={ab.pokemon.name}
                  url={ab.pokemon.url}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xl flex">{'moves: '}</p>
            <p className="text-xl flex">
              {moves.map((ab, key) => {
                return ab.name + (key + 1 === moves.length ? `` : ', ');
              })}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <div>
        <div className="animate-pulse w-44 h-8 bg-slate-500 rounded-3xl mt-6 mb-10" />
        <div className="animate-pulse w-32 h-5 bg-slate-500 rounded-3xl my-4" />
        <div className="animate-pulse w-60 h-5 bg-slate-500 rounded-3xl my-4" />
        <div className="animate-pulse w-80 h-5 bg-slate-500 rounded-3xl my-4" />
        <div className="animate-pulse w-36 h-5 bg-slate-500 rounded-3xl my-4" />
      </div>
    );
  };

  return (
    <PageBase>
      <div className=" max-w-screen-lg w-full">
        <div id="title" className="absolute -top-6" />
        {isLoading ? (
          renderLoading()
        ) : !name ? (
          <p className="text-center">no pokemon catched</p>
        ) : (
          renderDetail()
        )}
      </div>
    </PageBase>
  );
}
