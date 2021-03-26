export const InitSSE = ({ url, acceptedEvents }) => {
  console.log("url: ", url);
  console.log("events", acceptedEvents);
  if (!url) {
    throw new Error("'url' not specified");
  }
  return {
    url,
    acceptedEvents,
  };
};
