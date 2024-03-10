import { describe, it } from 'mocha';
import { expect } from 'chai';
import supertest from 'supertest';
import {app} from '../src/app.js';

const api = supertest(app);

describe('Productos Router', () => {
  it('should get a list of products', async () => {
    const response = await api.get('/api/productos');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    // Agrega más validaciones según tu implementación
  });

  it('should get a list of categories', async () => {
    const response = await api.get('/api/productos/cat');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    // Agrega más validaciones según tu implementación
  });

  it('should get a specific product by ID', async () => {
    const productId = '123'; // Reemplaza con un ID válido
    const response = await api.get(`/api/productos/${productId}`);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    // Agrega más validaciones según tu implementación
  });

  it('should create a new product', async () => {
    const newProduct = {
      // Define los datos del nuevo producto
    };

    const response = await api.post('/api/productos').send(newProduct);
    expect(response.status).to.equal(201);
    expect(response.body).to.be.an('object');
    // Agrega más validaciones según tu implementación
  });

  it('should update a product by ID', async () => {
    const productId = '123'; // Reemplaza con un ID válido
    const updatedProduct = {
      // Define los datos actualizados del producto
    };

    const response = await api.put(`/api/productos/${productId}`).send(updatedProduct);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    // Agrega más validaciones según tu implementación
  });

  it('should delete a product by ID', async () => {
    const productId = '123'; // Reemplaza con un ID válido
    const response = await api.delete(`/api/productos/${productId}`);
    expect(response.status).to.equal(200);
    // Agrega más validaciones según tu implementación
  });
});