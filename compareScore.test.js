const compareScore = require('./compareScore');
test('comparaion du score de 2 joueur', () => {
    let joueur1 = {score : 34};
    let joueur2 = {score : 24};
    expect(compareScore(joueur1,joueur2)).toBe(10);
});
