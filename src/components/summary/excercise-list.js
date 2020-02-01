import React from 'react';
import { StoreContainer } from "../state/store"
import Row from "./row"

export default () => {
  let {excercises} = StoreContainer.useContainer()

  return <div>{excercises.map(ex => <Row {...ex} />)}</div>
};