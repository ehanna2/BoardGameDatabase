select
      Games.GameID
    , Games.Name
    , Games.Description
    , Categories.Name as Category    
    , Games.MinimumPlayers
    , Games.MaximumPlayers
    , Games.RecommendedAge as Ages
    , Games.MSRP
from Games
left join Categories on Categories.CategoryID = Games.CategoryID
