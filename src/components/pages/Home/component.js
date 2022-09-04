import React, { useState, useEffect } from 'react';
import PageBase from '../../layouts/PageBase';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from './action';
import CardMain from '../../elements/CardMain';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from 'next/image';
import { IMAGES } from '../../../configs';
import clsx from 'clsx';

export default function Home() {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(40);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const { pokemon = [] } = useSelector((state) => state.home || {});

  useEffect(() => {
    dispatch(
      getFilms({
        offset: offset,
        limit: limit,
      })
    );
  }, [dispatch, offset, limit]);

  const nextPage = () => {
    setOffset(offset + 40);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);


  const goToTop = () => {
    const element = document.getElementById('title');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'start',
      });
    }
  };

  return (
    <PageBase>
      <div className=" max-w-screen-lg w-full">
        <div id="title" className="absolute -top-6" />
        <div className={clsx("w-full flex justify-end", {'hidden': !showTopBtn})}>
          <button
            className={'fixed bg-white rounded-full bottom-0 mr-4 mb-4 h-[40px]'}
            onClick={goToTop}
          >
            <Image alt="up" height="40" src={IMAGES.ARROW_UP} width="40" />
          </button>
        </div>
        <InfiniteScroll
          dataLength={pokemon.length}
          next={nextPage}
          hasMore={true}
          loader={<h4 className="text-center text-xl font-semibold">Loading...</h4>}
        >
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {pokemon.map((poke, idx) => (
              <CardMain key={idx} name={poke.name} url={poke.url} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </PageBase>
  );
}
