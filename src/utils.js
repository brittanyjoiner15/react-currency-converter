export const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error("Problem here");
};

export const json = (response) => response.json();
