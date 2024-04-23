interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

//los metodos estaticos solo sirven cuando no vas a hacer inyeccion de dependencias
export class CheckService implements CheckServiceUseCase {
  async execute(url: string): Promise<boolean> {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return true;
      } else {
        throw new Error("Error");
      }
    } catch (err) {
      return false;
    }
  }
}

// poner mas fotos y quitar menos texto
