function getEnv() {
  const lh = location.host;
  let env = '';

  if (lh.split(':')[1]) {
    env = 'dev';
  } else if (lh.split('.')[0].split('-')[1]) {
    env = lh.split('.')[0].split('-')[0];
  }

  return env ? `${env}-` : env;
}

const env = getEnv();

export const ADM_API = `https://${env}adm-api.wappa.com.br/api/`;
export const AUTH_API = `https://${env}auth.wappa.com.br/api/`;
