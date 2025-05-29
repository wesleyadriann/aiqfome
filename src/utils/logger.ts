const info = (...message: any[]) => {
  const asctime = new Date().toISOString();
  console.log(`[INFO][${asctime}]`, ...message);
};

const error = (...message: any[]) => {
  const asctime = new Date().toISOString();
  console.error(`[ERROR][${asctime}]`, ...message);
};

export const logger = {
  info,
  error,
};
