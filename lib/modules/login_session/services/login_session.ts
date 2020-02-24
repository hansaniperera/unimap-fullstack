import login_session from '../schemas/login_session';

export class LoginSessionService {

    public loginUser(login_token: String, uuid: String, callback: any) {
        var login_params = {
            login_token: login_token,
            uuid: uuid
        }
        var login_session_ = new login_session(login_params);
        login_session_.save(callback);
    }

}
