interface IInteractor<T> {
    createInstance(data: any): T;
  }
  
export default IInteractor;
