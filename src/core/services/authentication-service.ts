import { API_ACCOUNT_LOGIN, API_BASE_URL } from "config/api-consts";
import { httpConfig } from "core/config/http";
import { kebabCase } from "lodash";
import { LoginUser } from "models/Login/Login";
import { Repository } from "react-3layer-common";
import { Observable } from "rxjs";
import nameof from "ts-nameof.macro";
import { join } from "path";
import { AppUser } from "models/AppUser";
class AuthenticationService extends Repository {
  constructor() {
    super(httpConfig);
    this.baseURL = join(API_BASE_URL, API_ACCOUNT_LOGIN);
  }

  public checkAuth(): Observable<AppUser> {
    return this.http
      .post<AppUser>(kebabCase(nameof(this.checkAuth)))
      .pipe(Repository.responseMapToModel<AppUser>(AppUser));
  }

  public login = (user: LoginUser): Observable<LoginUser> => {
    return this.http
      .post<LoginUser>(kebabCase(nameof(this.login)), user)
      .pipe(Repository.responseMapToModel<LoginUser>(LoginUser));
  };

  public logout = (): Observable<unknown> => {
    return this.http.post<unknown>(kebabCase(nameof(this.logout)), {});
  };
}

export const authenticationService = new AuthenticationService();
