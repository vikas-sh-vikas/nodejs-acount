import { useState, useEffect } from "react";

function useToasterHook(initialState:boolean) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    setData(initialState);
  }, [initialState]);

  return {data};
}

export {useToasterHook};