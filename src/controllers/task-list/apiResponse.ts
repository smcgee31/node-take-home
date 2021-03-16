interface ApiResponseArgs {
  status: number;
  message: string;
  data: [];
}
// interface ApiResponseData {
//   //
// }

export const ApiResponse = ({ status, message, data }: ApiResponseArgs) => {
  return {
    status,
    success: status > 399 ? false : true,
    message,
    data,
  };
};
