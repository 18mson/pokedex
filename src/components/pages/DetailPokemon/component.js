import React, { useEffect, useState } from 'react';
import PageBase from '../../layouts/PageBase';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from './action';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Image from 'next/image';
import { IMAGES } from '../../../configs';

function DetailPokemon() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const { isLoading } = useSelector((state) => state.loading || {});

  const {
    dataDetail: {
      name,
      abilities,
      base_experience,
      height,
      moves,
      stats,
      types,
      past_types,
      weight,
    },
  } = useSelector((state) => state.detailPokemon || {});

  useEffect(() => {
    id && dispatch(getDetail(id));
  }, [dispatch, id]);

  const handleClickNext = () => {
    router.push({
      pathname: `/detail-pokemon/${Number(id) + 1}`,
    });
  };

  const handleClickPrev = () => {
    router.push({
      pathname: `/detail-pokemon/${Number(id) - 1}`,
    });
  };

  const handleBytype = (url) => {
    const TypeId = url?.replace('https://pokeapi.co/api/v2/type/', '').replace('/', '') || 0;
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
            <button className="md:w-10 w-7 pt-2" onClick={handleClickNext}>
              <Image
                alt="next"
                height="40"
                src={IMAGES.ARROW_RIGHT}
                width="40"
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 order-last md:order-first">
            <p className="text-lg flex">
              {'abilities: '}
              {abilities.map((ab, key) => {
                return (
                  ab.ability.name + (key + 1 === abilities.length ? `` : ', ')
                );
              })}
            </p>
            <p className="text-lg">height: {height}</p>
            <p className="text-lg">weight: {weight}</p>
            <p className="text-lg">base experience: {base_experience}</p>
            <div className="text-lg flex">
              {'types: '}
              {types.map((ab, key) => (
                <>
                  <button
                    className={clsx('rounded w-auto px-3 mx-2', {
                      'bg-gray-300': ab.type.name === 'normal',
                      'bg-green-400 text-white': ab.type.name === 'fighting',
                      'bg-green-600 text-white': ab.type.name === 'flying',
                      'bg-green-700 text-white': ab.type.name === 'poison',
                      'bg-gray-500 text-white': ab.type.name === 'physical',
                      'bg-gray-700 text-white': ab.type.name === 'rock',
                      'bg-yellow-600 text-white': ab.type.name === 'bug',
                      'bg-gray-400 text-gray-100': ab.type.name === 'ghost',
                      'bg-gray-700 text-white': ab.type.name === 'steel',
                      'bg-red-600 text-white': ab.type.name === 'fire',
                      'bg-blue-400': ab.type.name === 'water',
                      'bg-green-400': ab.type.name === 'grass',
                      'bg-blue-600 text-white': ab.type.name === 'electric',
                      'bg-blue-300': ab.type.name === 'psychic',
                      'bg-blue-200': ab.type.name === 'ice',
                      'bg-red-700 text-white': ab.type.name === 'dragon',
                      'bg-black text-white': ab.type.name === 'dark',
                      'bg-yellow-400 text-white': ab.type.name === 'fairy',
                    })}
                    key={key}
                    onClick={() => handleBytype(ab.type.url)}
                  >
                    {ab.type.name}
                  </button>
                </>
              ))}
            </div>
            <p className="text-lg flex">
              {'past types: '}
              {past_types.length &&
                past_types.map((ab, key) => {
                  return (
                    ab.types[0].type.name +
                    (key + 1 === past_types.length ? `` : ', ')
                  );
                })}
            </p>
            <p className="text-lg flex">
              {'moves: '}
              {moves.map((ab, key) => {
                return ab.move.name + (key + 1 === moves.length ? `` : ', ');
              })}
            </p>
          </div>
          <div>
            <p className="text-base md:pl-5">
              {'stats: '}
              {stats.map((ab, key) => (
                <div key={key}>
                  <p>{ab.stat.name}:</p>
                  <div className="mb-2 w-full h-4 bg-gray-200 rounded-full">
                    <div
                      className={clsx('h-4 rounded-full', {
                        'bg-red-500 w-1/5': Math.round(ab.base_stat / 20) === 1,
                        'bg-red-400 w-2/5': Math.round(ab.base_stat / 20) === 2,
                        'bg-green-500 w-3/5':
                          Math.round(ab.base_stat / 20) === 3,
                        'bg-blue-500 w-4/5':
                          Math.round(ab.base_stat / 20) === 4,
                        'bg-blue-700 w-full':
                          Math.round(ab.base_stat / 20) === 5,
                      })}
                    />
                  </div>
                </div>
              ))}
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

export default DetailPokemon;
