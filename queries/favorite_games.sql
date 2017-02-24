--Returns First Name, Last Name, and Favorite Game

select
	 U.FirstName
	,U.LastName
	,Games.Name
	
from Users U
left join FavoriteGames on U.UserID = FavoriteGames.UserID
left join Games on Games.GameID = FavoriteGames.GameID
