def games(anfisaGames,alisaGames):
    # unitedGames = anfisaGames + alisaGames
    # print(unitedGames)
    # unitedGames = set(unitedGames)
    # print(unitedGames)

    # for i in unitedGames:
    #     print(i)
    anfisaGames = set(anfisaGames)
    alisaGames= set(alisaGames)
    unitedGames = anfisaGames.intersection(alisaGames)
    print(unitedGames)


x = ['game1', 'game2', 'game3', 'game4', 'game5']
y = ['game2','game4', 'game5', 'game6']

games(x, y)
