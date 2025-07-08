import { signUp } from 'aws-amplify/auth';

export async function registerUser(username: string, password: string) {
  try {
    const response = await signUp({
      username,
      password,
      options: {
        userAttributes: {   
          email: 'correo@ejemplo.com',
        },
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
