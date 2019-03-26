class Routes {
  constructor() {}

  async helloWelt(req, res, next): Promise<void> {
    res.send('👋🏽🌎');
  }

  errorHandler(error, req, res, next): void {
    const status = 500; // TODO: enhance this
    console.log(`Error during API execution status[${status}]: ${error}`)
    res.status(status).json({ error });
  }
}

export default Routes;
