const { MONGO_PASS, MONGO_CLUSTER, MONGO_USER, MONGO_NAME } = process.env;

module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}/${MONGO_NAME}?retryWrites=true&w=majority`,
  },
};
