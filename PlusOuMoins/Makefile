say_hello:
	@echo "Hello World"

run:
	@echo "Lancement du jeu"
	@./plusOuMoins.sh

scores:
	@echo "Affichage des scores"
	@sort -b -k 2,2 highScore.csv

reset-scores:
	@echo "Reset des scores"
	@rm highScore.csv
	@touch highScore.csv

score-by:
	@echo "Recherche le score d un joueur, entrer le nom d un joueur"
	read name
	grep $${name} highScore.csv



