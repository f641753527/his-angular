import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AppData } from './app.model';
import { Token, Clinic, User } from './app.actions';
import { get, set } from './cache';

@State<AppData>({
  name: 'app',
  defaults: {
    token: get('token'),
    clinic_id: get('clinic_id'),
    user: get('user')
  }
})
export class AppState {


  @Selector()
  static get_token(state: AppData) {
    return state.token;
  }

  @Action(Token)
  public change_token({ getState, setState }: StateContext<AppData>, { token }: Token) {
    const state: AppData = getState();
    setState({
      ...state,
      token: token
    });
    set('token', token);
  }

  @Selector()
  static get_user(state: AppData) {
    return state.user;
  }

  @Action(User)
  public change_user({ getState, setState }: StateContext<AppData>, { user }: User) {
    const state: AppData = getState();
    setState({
      ...state,
      user: user
    });
    set('user', user);
  }


  @Selector()
  static get_clinic(state: AppData) {
    return state.clinic_id;
  }

  @Action(Clinic)
  public change_clinic({ getState, setState }: StateContext<AppData>, { clinic_ic }: Clinic) {
    const state: AppData = getState();
    setState({
      ...state,
      clinic_id: clinic_ic
    });
    set('clinic_ic', clinic_ic);
  }

}