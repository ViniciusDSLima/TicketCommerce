import {AppError} from "../model/AppError";

export class ResourceNotFoundError extends AppError {
  public type: string;
  public status: number;

  constructor(message: string) {
    super(message);

    this.type = "RESOURCE_NOT_FOUND";
    this.status = 404;
  }
}
