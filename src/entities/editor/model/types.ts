export type TypeQueryErrorObject = {
  response?: {
    errors?: Array<{
      message?: string;
    }>;
  };
};

export type TypeEndpoint = {
  id: number;
  url: string;
};
