import { describe, it } from 'mocha';
import { expect } from 'chai';
import supertest from 'supertest';
import {app} from '../src/app.js';

const api = supertest(app);

describe('Sessions Router', () => {
  it('should login a user and return a JWT', async () => {
    const userCredentials = {
      // Define las credenciales de usuario para iniciar sesión
    };

    const response = await api.post('/api/sessions').send(userCredentials);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('token');
    // Agrega más validaciones según tu implementación
  });

  it('should get the current session user', async () => {
    const response = await api.get('/api/sessions/current');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    // Agrega más validaciones según tu implementación
  });

  it('should logout the current session user', async () => {
    const response = await api.delete('/api/sessions/current');
    expect(response.status).to.equal(200);
    // Agrega más validaciones según tu implementación
  });
});