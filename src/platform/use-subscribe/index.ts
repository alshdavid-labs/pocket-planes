import { Subscribable, Observable } from 'rxjs'
import { useState, useEffect, useCallback } from 'react';

export const useSubscribe = <T = any>(
  o: Observable<T>, 
  defaultValue?: T
): T => {
  console.log(o, defaultValue)

  let d: any
  if (defaultValue) {
    d = defaultValue
  } if ((o as any).getValue) {
    d = (o as any).getValue()
  } else if (defaultValue = (o as any).value) {
    d = (o as any).value
  } else {
    const s = o.subscribe(v => d = v)
    s.unsubscribe()
  }

  const [ value, setValue ] = useState(d);
  const [_, updateState] = useState();

  useEffect(() => {
    const s = o.subscribe(v => {
      setValue(v)
      updateState({})
    })    
    return () => s.unsubscribe()
  }, [ d ]);
  
  return value as T;
};

export * from './on-next'