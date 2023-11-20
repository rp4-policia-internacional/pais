class NotificationSubject {
    private observers: Observer[] = [];
  
    public addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    public removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    public notify(message: string): void {
      for (const observer of this.observers) {
        observer.update(message);
      }
    }
  }
  
  interface Observer {
    update(message: string): void;
  }
  
  export default NotificationSubject;
  