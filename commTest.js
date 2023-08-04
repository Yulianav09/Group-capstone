const request = require('supertest');
const app = require('./app'); // Assuming your Express app is exported from app.js or the relevant file

describe('Comments Count API', () => {
  it('should return 0 comments for a new Pokemon without comments', async () => {
    const res = await request(app).get('/api/comments/pikachu/count');
    expect(res.status).toBe(200);
    expect(res.body.commentsCount).toBe(0);
  });

  it('should return correct comments count for a Pokemon with comments', async () => {
    // Assuming you have added comments for the Pokemon "bulbasaur" in your in-memory storage or database
    // Make sure to clear the comments before running the test to ensure a consistent state
    // For example, you can add a method in your backend to clear all comments for a Pokemon
    // before running this test.
    const res = await request(app).get('/api/comments/bulbasaur/count');
    expect(res.status).toBe(200);
    expect(res.body.commentsCount).toBeGreaterThan(0); // Assumes comments are added for "bulbasaur"
  });

  it('should return 404 for a non-existent Pokemon', async () => {
    const res = await request(app).get('/api/comments/nonexistentpokemon/count');
    expect(res.status).toBe(404);
  });
});
