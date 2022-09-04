import { SERVICES } from '../configs';
import fetch from '../utils/fetch';
import { getToken } from '../utils/common';

export function getNotificationUpdate(token) {
  return dispatch => {
    const tokenUser = getToken() || token;
    const options = {
      method: 'GET',
      url: SERVICES.GET_NOTIF_UPDATE,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${tokenUser}`
      }
    };

    return fetch(options)
      .then(res => {
        dispatch(setNotifUpdate(res.data));
      })
      .catch(() => {
        dispatch(setNotifUpdate([]));
      });
  };
}
