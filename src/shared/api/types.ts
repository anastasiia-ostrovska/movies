// Failure response
type ResponseErrorFields = Record<string, string | number>;

interface ResponseError {
  fields: ResponseErrorFields;
  code: string;
}

export interface FailureResponse {
  status: 0;
  error: ResponseError;
}
