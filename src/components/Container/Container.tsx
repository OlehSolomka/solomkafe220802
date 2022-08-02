import React from 'react';
import s from './Container.module.css';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className={s.container}>
      <h1 className={s.text}>SPENT TIME (SECONDS)</h1>
      {children}
    </div>
  );
};

export default Container;
