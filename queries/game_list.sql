select
    Name, 
    Description,
    (
        select Name
        from Categories
        where Categories.CategoryID = Games.CategoryID
    ) as Category,
    MinimumPlayers,
    MaximumPlayers,
    RecommendedAge as Ages,
    MSRP
from Games
