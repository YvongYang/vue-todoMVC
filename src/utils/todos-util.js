export const TODOS = 'TODOS';

export function getTodos() {
  return localStorage.getItem(TODOS) && localStorage.getItem(TODOS) !== 'undefined'
        ? JSON.parse(localStorage.getItem(TODOS))
        : [];
}
