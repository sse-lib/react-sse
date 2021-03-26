import { createElement, useMemo } from "react";
import { ReactSSEContext } from "./contex";
import { InitSSE } from "./initSSE";

export const ServerEventsProvider = ({ config, children }) => {
  const state = useMemo(() => InitSSE(config), [config]);

  return createElement(
    ReactSSEContext.Provider,
    {
      value: state,
    },
    children
  );
};
