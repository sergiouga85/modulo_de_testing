import { describe, it } from 'mocha';
import { expect } from 'chai';
import supertest from 'supertest';
import {app} from '../src/app.js';

const api = supertest(app);

describe('Carts Router', () => {
  it('should get a list of carts', async () => {
    const response = await api.get('/api/carts');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    // Agrega más validaciones según tu implementación
  });

  it('should get a specific cart by ID', async () => {
    const cartId = '123'; // Reemplaza con un ID válido
    const response = await api.get(`/api/carts/${cartId}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    // Agrega más validaciones según tu implementación
  });

  it('should create a new cart', async () => {
    const response = await api.post('/api/carts');
    expect(response.status).to.equal(201);
    expect(response.body).to.be.an('object');
    // Agrega más validaciones según tu implementación
  });

  it('should update the quantity of a product in the cart', async () => {
    const cartId = '123'; // Reemplaza con un ID válido
    const productId = '456'; // Reemplaza con un ID de producto válido
    const updatedQuantity = 3; // Reemplaza con la cantidad actualizada

    const response = await api.put(`/api/carts/${cartId}/producto/${productId}`).send({ quantity: updatedQuantity });
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    // Agrega más validaciones según tu implementación
  });

  it('should add a product to the cart', async () => {
    const cartId = '123'; // Reemplaza con un ID válido
    const productId = '456'; // Reemplaza con un ID de producto válido

    const response = await api.put(`/api/carts/${cartId}/add/${productId}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    // Agrega más validaciones según tu implementación
  });

  it('should delete a cart', async () => {
    const cartId = '123'; // Reemplaza con un ID válido
    const response = await api.delete(`/api/carts/${cartId}`);
    expect(response.status).to.equal(200);
    // Agrega más validaciones según tu implementación
  });

  it('should delete a product from the cart', async () => {
    const cartId = '123'; // Reemplaza con un ID válido
    const productId = '456'; // Reemplaza con un ID de producto válido

    const response = await api.delete(`/api/carts/${cartId}/producto/${productId}`);
    expect(response.status).to.equal(200);
    // Agrega más validaciones según tu implementación
  });

  it('should purchase the cart', async () => {
    const cartId = '123'; // Reemplaza con un ID válido
    const response = await api.post(`/api/carts/${cartId}/purchase`);
    expect(response.status).to.equal(200);
    // Agrega más validaciones según tu implementación
  });
});