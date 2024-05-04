import {TypeAuthenticationRequest} from "@/types.ts";
import axios from "axios";

class AuthenticationService {
  getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken)
  }

  async loginUser(authenticationRequest: TypeAuthenticationRequest) {
    const response = await axios.post<{accessToken: string}>(
      "http://localhost:8080/api/v1/auth/login",
      {
        email: authenticationRequest.email,
        password: authenticationRequest.password
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    console.log(response)
    console.log(response.data)

    return response.data
  }
}

export const authenticationService = new AuthenticationService();