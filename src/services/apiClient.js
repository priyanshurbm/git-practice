const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;

      if (attempt < retries) {
        await wait(delay);
      }
    }
  }

  throw lastError;
};

const fetchMultipleEndpoints = async (urls) => {
  const results = await Promise.allSettled(
    urls.map((url) => fetchWithRetry(url))
  );

  return results.map((result, index) =>
    result.status === 'fulfilled'
      ? result.value
      : {
          url: urls[index],
          error: result.reason.message,
        }
  );
};

module.exports = {
  fetchWithRetry,
  fetchMultipleEndpoints,
};
