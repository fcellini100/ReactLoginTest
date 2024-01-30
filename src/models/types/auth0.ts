export type Auth0ProviderData = {
  domain: string;
  clientId: string;
  authorizationParams: Auth0Param;
};

export type Auth0Param = {
  redirect_uri: string;
};
