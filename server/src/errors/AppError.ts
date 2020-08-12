import { CustomError } from 'ts-custom-error'
 
export enum AppErrorType {
    RESOURCE_ALREADY_EXISTS = "RESOURCE_ALREADY_EXISTS",
    RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",
    AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED",
    VALIDATION_FAILED = "VALIDATION_FAILED",
    UNEXPECTED_FAILURE = "UNEXPECTED_FAILURE",
    INVALID_PARAMS = "INVALID_PARAMS",
    DATABASE_ERROR = "DATABASE_ERROR"
}


export class AppError extends CustomError {
    public constructor(
        public type: AppErrorType,
        public message: string,
        public data?: any | Error
    ) {
        super(data instanceof Error ? message + ": " + data.message : message)
        if (data instanceof Error){
            this.message = this.message + ": " + data.message
        } else {
            this.message = message
        }
        this.data = data
        this.type = type
    }
}