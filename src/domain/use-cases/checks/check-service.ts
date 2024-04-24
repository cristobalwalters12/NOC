interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccesCallback = () => void;
type ErrorCallback = (error: string) => void;

//los metodos estaticos solo sirven cuando no vas a hacer inyeccion de dependencias
export class CheckService implements CheckServiceUseCase {
  constructor(
    //aqui se pueden hacer inyecciones de dependencias
    private readonly successCallback: SuccesCallback,
    private readonly errorCallback: ErrorCallback
  ) {}
  public async execute(url: string): Promise<boolean> {
    try {
      const response = await fetch(url);
      if (response.ok) {
        this.successCallback();
        return true;
      } else {
        throw new Error("Error checking the service");
      }
    } catch (err) {
      const message: string = "Error checking the serviceeeee";
      this.errorCallback(message);
      return false;
    }
  }
}

// poner mas fotos y quitar menos texto
