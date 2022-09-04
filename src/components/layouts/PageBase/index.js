import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { IMAGES } from '../../../configs';
import Image from 'next/image';

function Component({
  children,
}) {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-2 shadow-md fixed w-full z-20 bg-white">
        <div className="h-20 mx-auto flex items-center lg:max-w-screen-lg">
          <Link href="/" passHref>
            <div className="flex cursor-pointer">
              <Image alt="star" height="30" src={IMAGES.POKEBALL} width="30" />
              <a className="block text-2xl pl-2">Pokedex</a>
            </div>
          </Link>
        </div>
      </header>
      <main className="py-24 px-4 flex flex-1 justify-center">{children}</main>
    </div>
  );
}

Component.defaultProps = {
  observeFooter: false,
  onFooterViewChange: () => {},
  scrollToTop: false,
};

Component.propTypes = {
  children: PropTypes.node.isRequired,
  observeFooter: PropTypes.bool,
  onFooterViewChange: PropTypes.func,
  scrollToTop: PropTypes.bool,
};

export default Component;
