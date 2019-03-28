interface IInteractor<T> {
    createInstance(data: object): T;
  }
  
export default IInteractor;
