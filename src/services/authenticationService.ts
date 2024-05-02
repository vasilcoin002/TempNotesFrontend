class AuthenticationService {
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }
}

export const authenticationService = new AuthenticationService();