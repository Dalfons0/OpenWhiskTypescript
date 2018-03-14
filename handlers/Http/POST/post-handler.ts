export function postHello(params: { name: string }) {
  const name = params.name || 'World';
  return { payload: `Hello, ${name}!` };
}
