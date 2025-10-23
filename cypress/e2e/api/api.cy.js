/// <reference types="cypress" />

const BASE_API = "https://dog.ceo/api";

describe("🐾 Testes de API - Dog API", () => {

  context("GET /breeds/list/all", () => {
    it("Deve retornar a lista de raças com status 200 e formato correto", () => {
      cy.request(`${BASE_API}/breeds/list/all`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("message");
        expect(response.body.message).to.be.an("object");
        expect(response.body).to.have.property("status", "success");
        // Verifica se há pelo menos uma raça
        const breeds = Object.keys(response.body.message);
        expect(breeds.length).to.be.greaterThan(0);
      });
    });
  });

  context("GET /breed/{breed}/images", () => {
    const breed = "hound";

    it(`Deve retornar imagens da raça ${breed} com status 200`, () => {
      cy.request(`${BASE_API}/breed/${breed}/images`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("message");
        expect(response.body.message).to.be.an("array");
        expect(response.body.message[0]).to.match(/^https:\/\/images\.dog\.ceo/);
        expect(response.body).to.have.property("status", "success");
      });
    });

    it("Deve retornar erro 404 para uma raça inexistente", () => {
      cy.request({
        url: `${BASE_API}/breed/raçaInexistente/images`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });

  context("GET /breeds/image/random", () => {
    it("Deve retornar uma imagem aleatória de qualquer raça", () => {
      cy.request(`${BASE_API}/breeds/image/random`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.be.a("string");
        expect(response.body.message).to.match(/^https:\/\/images\.dog\.ceo/);
        expect(response.body.status).to.eq("success");
      });
    });
  });

});
