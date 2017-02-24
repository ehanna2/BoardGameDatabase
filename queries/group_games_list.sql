--Returns the Group Name and the game they are playing
select 
	Groups.Name as 'Group Name'
	, Games.Name as 'Game Name'
from GroupGames
left join Groups on Groups.GroupID = GroupGames.GroupID
left join Games on Games.GameID = GroupGames.GameID