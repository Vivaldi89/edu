/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
  constructor() {
    this.subscriber = () => {};
    this.token = "";
 }
 subscribe(data) {
    typeof data === 'function' ? this.subscriber = data : null;
 };
 setToken(t) {
    this.token = t
    this.subscriber(t);
 }
 removeToken() {
    this.token = null
    this.subscriber(this.token);
 }
 getToken() {
    return this.token
 }
}

window.TokenService = TokenService;

export default TokenService;
