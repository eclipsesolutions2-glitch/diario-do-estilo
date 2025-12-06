type SuccessResponse<T> = {
  success: true;
  data: T;
  message: string;
};

type ErrorResponse = {
  success: false;
  error: string;
};

export type ApiResponse<T = unknown> = SuccessResponse<T> | ErrorResponse;

export const ApiResponseBuilder = {
  success<T>(data: T, message = "Ação realizada com sucesso."): ApiResponse<T> {
    return {
      success: true,
      data,
      message,
    };
  },

  error(error: string): ApiResponse<never> {
    return {
      success: false,
      error,
    };
  },
};
